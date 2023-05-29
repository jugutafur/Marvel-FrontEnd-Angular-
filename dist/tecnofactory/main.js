"use strict";
(self["webpackChunktecnofactory"] = self["webpackChunktecnofactory"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_principal_principal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/principal/principal.component */ 6721);
/* harmony import */ var _core_components_access_access_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/access/access.component */ 6208);
/* harmony import */ var _core_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/register/register.component */ 2629);
/* harmony import */ var _core_components_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/cuenta/cuenta.component */ 9035);
/* harmony import */ var _core_guards_guardian_access_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guards/guardian-access.guard */ 9067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [{
  path: '',
  component: _layout_principal_principal_component__WEBPACK_IMPORTED_MODULE_0__.PrincipalComponent
}, {
  path: 'access',
  component: _core_components_access_access_component__WEBPACK_IMPORTED_MODULE_1__.AccessComponent
}, {
  path: 'register',
  component: _core_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent
}, {
  path: 'cuenta/:id',
  canActivate: [_core_guards_guardian_access_guard__WEBPACK_IMPORTED_MODULE_4__.GuardianAccessGuard],
  component: _core_components_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_3__.CuentaComponent
}, {
  path: 'Admin',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_core_components_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/components/admin/admin.module */ 7618)).then(m => m.AdminModule)
}
// {
//   path:'menuComponent',
//   component: MenuComponent
// }
];

class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'tecnofactory';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share/share.module */ 7841);
/* harmony import */ var _core_components_register_register_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/register/register.module */ 269);
/* harmony import */ var _core_components_access_access_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/access/access.module */ 1760);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _layout_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/principal/principal.component */ 6721);
/* harmony import */ var _core_components_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/cuenta/cuenta.component */ 9035);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _core_components_access_access_module__WEBPACK_IMPORTED_MODULE_3__.AccessModule, _core_components_register_register_module__WEBPACK_IMPORTED_MODULE_2__.RegisterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _layout_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__.PrincipalComponent, _core_components_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_6__.CuentaComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _share_share_module__WEBPACK_IMPORTED_MODULE_1__.ShareModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _core_components_access_access_module__WEBPACK_IMPORTED_MODULE_3__.AccessModule, _core_components_register_register_module__WEBPACK_IMPORTED_MODULE_2__.RegisterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 8354:
/*!*****************************************************************!*\
  !*** ./src/app/core/components/access/access-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessRoutingModule": () => (/* binding */ AccessRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AccessRoutingModule {}
AccessRoutingModule.ɵfac = function AccessRoutingModule_Factory(t) {
  return new (t || AccessRoutingModule)();
};
AccessRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AccessRoutingModule
});
AccessRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccessRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6208:
/*!************************************************************!*\
  !*** ./src/app/core/components/access/access.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessComponent": () => (/* binding */ AccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5384);




class AccessComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.formularioLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(100)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(4)])
    });
  }
  ngOnInit() {}
  crearUsuario() {
    this.apiService.loginAcount().subscribe(newUserX => {
      var registros = newUserX;
      console.log(newUserX);
      console.log("aca");
      console.log(registros['name']);
    });
    alert("usuario create");
  }
}
AccessComponent.ɵfac = function AccessComponent_Factory(t) {
  return new (t || AccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
AccessComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AccessComponent,
  selectors: [["app-access"]],
  decls: 17,
  vars: 6,
  consts: [[1, "access"], ["src", "../../../assets/imgGeneral/access2.jpg"], [1, "form_access"], ["src", "../../../assets/imgGeneral/access.jpg"], [3, "formGroup"], [1, "mb-3"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Email address characteres(5, 100) ", "formControlName", "email", 1, "form-control"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password min characteres= 4", "formControlName", "password", 1, "form-control"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"]],
  template: function AccessComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "SIGN IN WITH YOUR EMAIL");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Check me out");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccessComponent_Template_button_click_15_listener() {
        return ctx.crearUsuario();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Sing in");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formularioLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.formularioLogin.get("email").touched && ctx.formularioLogin.get("email").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.formularioLogin.get("password").touched && ctx.formularioLogin.get("password").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.formularioLogin.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: [".access[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  width: 100%;\n  position: relative;\n}\n\n.form_access[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 40%;\n  border-radius: 2px;\n  opacity: 0.9;\n}\n\n.form_access[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.form_access[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40rem;\n  height: 15rem;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2FjY2Vzcy9hY2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjZXNzIGltZ3tcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9ybV9hY2Nlc3N7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uZm9ybV9hY2Nlc3MgcCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtX2FjY2VzcyBpbWd7XHJcbiAgICB3aWR0aDogNDByZW07XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpOyBcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1760:
/*!*********************************************************!*\
  !*** ./src/app/core/components/access/access.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessModule": () => (/* binding */ AccessModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _access_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-routing.module */ 8354);
/* harmony import */ var _access_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access.component */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class AccessModule {}
AccessModule.ɵfac = function AccessModule_Factory(t) {
  return new (t || AccessModule)();
};
AccessModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AccessModule
});
AccessModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _access_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccessModule, {
    declarations: [_access_component__WEBPACK_IMPORTED_MODULE_1__.AccessComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _access_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
    exports: [_access_component__WEBPACK_IMPORTED_MODULE_1__.AccessComponent]
  });
})();

/***/ }),

/***/ 9035:
/*!************************************************************!*\
  !*** ./src/app/core/components/cuenta/cuenta.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaComponent": () => (/* binding */ CuentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class CuentaComponent {
  constructor(apiService, route) {
    this.apiService = apiService;
    this.route = route;
    this.lista_Usuarios = [];
  }
  ngOnInit() {
    this.fetchGetUsers();
  }
  fetchGetUsers() {
    this.route.params.subscribe(params => {
      console.log(params);
      const interar = params.id;
      console.log(interar);
      this.apiService.getXUser(interar).subscribe(userX => {
        this.lista_Usuarios = userX;
        console.log(userX);
      });
    });
  }
  updateUsers() {
    const editUser = {
      name: "cambioNombre",
      identification: "cambioIdentification"
    };
    this.apiService.updateUser('2', editUser).subscribe(editUser => {
      console.log(editUser);
    });
  }
  crearUsuario() {
    const newUser = {
      name: "newUser",
      identification: "newIdentification",
      email: "newEmail@gmail.com",
      password: "cla000"
    };
    this.apiService.createUser(newUser).subscribe(newUserX => {
      console.log(newUserX);
    });
    console.log("vas a crear usuarios");
  }
}
CuentaComponent.ɵfac = function CuentaComponent_Factory(t) {
  return new (t || CuentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};
CuentaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CuentaComponent,
  selectors: [["app-cuenta"]],
  decls: 16,
  vars: 6,
  consts: [[3, "click"]],
  template: function CuentaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul")(3, "li")(4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CuentaComponent_Template_button_click_14_listener() {
        return ctx.updateUsers();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Editar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Bienvenido ", ctx.lista_Usuarios["name"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("id : ", ctx.lista_Usuarios["id"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("primernombre : ", ctx.lista_Usuarios["name"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("segundonombre : ", ctx.lista_Usuarios["identitication"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("correo : ", ctx.lista_Usuarios["email"], "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("clave : ", ctx.lista_Usuarios["password"], "");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1416:
/*!*********************************************************************!*\
  !*** ./src/app/core/components/register/register-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterRoutingModule": () => (/* binding */ RegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _access_access_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../access/access.component */ 6208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: 'access',
  component: _access_access_component__WEBPACK_IMPORTED_MODULE_0__.AccessComponent
}];
class RegisterRoutingModule {}
RegisterRoutingModule.ɵfac = function RegisterRoutingModule_Factory(t) {
  return new (t || RegisterRoutingModule)();
};
RegisterRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: RegisterRoutingModule
});
RegisterRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2629:
/*!****************************************************************!*\
  !*** ./src/app/core/components/register/register.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 5384);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





class RegisterComponent {
  constructor(apiService) {
    this.apiService = apiService;
    /*
      crearUsuario(){
        this.apiService.createUser(this.miformulario.value)
        .subscribe(newUserX=>{
          console.log(newUserX);
        })
        alert("usuario create");
      }*/
    this.miformulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
      identification: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(100)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(4)])
    });
  }
  ngOnInit() {}
  validar() {
    alert("enviar a ingreso");
  }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 22,
  vars: 9,
  consts: [[1, "access"], ["src", "../../../assets/imgGeneral/register2.jpeg"], [1, "form_access"], ["src", "../../../assets/imgGeneral/register.jpg"], [3, "formGroup"], [1, "mb-3"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Name", "formControlName", "name", 1, "form-control"], ["type", "text", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "identification", "formControlName", "identification", 1, "form-control"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Email address characteres(5, 100) ", "formControlName", "email", 1, "form-control"], ["type", "password", "id", "exampleInputPassword1", "placeholder", "Password min characteres= 4", "formControlName", "password", 1, "form-control"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["routerLink", "/access", "type", "submit", 1, "btn", "btn-primary", 3, "click"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "CREATE YOUR ACCOUNT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Acept term and Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_20_listener() {
        return ctx.validar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "CONFIRM ACCESS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.miformulario);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.miformulario.get("name").touched && ctx.miformulario.get("name").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.miformulario.get("identification").touched && ctx.miformulario.get("identification").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.miformulario.get("email").touched && ctx.miformulario.get("email").invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.miformulario.get("password").touched && ctx.miformulario.get("password").invalid);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
  styles: [".access[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  width: 100%;\n  position: relative;\n}\n\n.form_access[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 40%;\n  border-radius: 2px;\n  opacity: 0.9;\n}\n\n.form_access[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  text-align: center;\n}\n\n.form_access[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40rem;\n  height: 15rem;\n  margin-left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: 3rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY2VzcyBpbWd7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZvcm1fYWNjZXNze1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmZvcm1fYWNjZXNzIHAge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybV9hY2Nlc3MgaW1ne1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 269:
/*!*************************************************************!*\
  !*** ./src/app/core/components/register/register.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModule": () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1416);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component */ 2629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class RegisterModule {}
RegisterModule.ɵfac = function RegisterModule_Factory(t) {
  return new (t || RegisterModule)();
};
RegisterModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: RegisterModule
});
RegisterModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegisterModule, {
    declarations: [_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 9067:
/*!******************************************************!*\
  !*** ./src/app/core/guards/guardian-access.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuardianAccessGuard": () => (/* binding */ GuardianAccessGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GuardianAccessGuard {
  canActivate(route, state) {
    return true;
  }
}
GuardianAccessGuard.ɵfac = function GuardianAccessGuard_Factory(t) {
  return new (t || GuardianAccessGuard)();
};
GuardianAccessGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GuardianAccessGuard,
  factory: GuardianAccessGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5384:
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class ApiService {
  constructor(http) {
    this.http = http;
  }
  getAllCharacters() {
    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Url_apiMarvel);
  }
  getXUser(id) {
    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Url_apiBD + "/" + id);
  }
  createUser(user) {
    return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Url_apiBD + "save", user);
  }
  updateUser(id, changes) {
    return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Url_apiBD + id, changes);
  }
  loginAcount() {
    return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.Url_apiBD + "/todos");
  }
}
ApiService.ɵfac = function ApiService_Factory(t) {
  return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ApiService,
  factory: ApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6721:
/*!*********************************************************!*\
  !*** ./src/app/layout/principal/principal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalComponent": () => (/* binding */ PrincipalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/api.service */ 5384);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _share_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../share/components/banner/banner.component */ 9902);
/* harmony import */ var _share_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share/components/footer/footer.component */ 2379);





function PrincipalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 7)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("src", "", i_r1.thumbnail.path, ".", i_r1.thumbnail.extension, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](9, 4, i_r1.description, 0, 50));
  }
}
class PrincipalComponent {
  constructor(apiService) {
    this.apiService = apiService;
    this.lista_galeria = [];
  }
  ngOnInit() {
    this.getCharacters();
  }
  leerdesdebanner(variable) {
    if (variable == "salidaDeCampo") {
      this.var_seccion = "salio de la zona";
    } else {
      this.var_seccion = variable;
    }
  }
  getCharacters() {
    this.apiService.getAllCharacters().subscribe(characters => {
      var mientras = characters.data.results;
      console.log(characters.data.results);
      this.menus = mientras;
      console.log(this.menus);
    });
  }
}
PrincipalComponent.ɵfac = function PrincipalComponent_Factory(t) {
  return new (t || PrincipalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
};
PrincipalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PrincipalComponent,
  selectors: [["app-principal"]],
  decls: 6,
  vars: 1,
  consts: [[3, "salida"], [1, "carousel"], [1, "carousel__container"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], [1, "img"], [1, "carousel-item"], [1, "carousel-item__img", 3, "src"], [1, "carousel-item__details"], ["src", "../../../assets/imgGeneral/plus-icon.png", "a", "", "lt", "Plus Icon", 1, "carousel-item__details--img"], [1, "carousel-item__details--title"], [1, "carousel-item__details--subtitle"]],
  template: function PrincipalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-banner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("salida", function PrincipalComponent_Template_app_banner_salida_0_listener($event) {
        return ctx.leerdesdebanner($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrincipalComponent_div_3_Template, 10, 8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 4)(5, "app-footer");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menus);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _share_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _share_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe],
  styles: [".img[_ngcontent-%COMP%] {\n  background-image: url('principal.jpg');\n  height: 400px;\n  width: 100%;\n  margin-bottom: 10rem;\n  margin-top: 5rem;\n}\n\n.pintar[_ngcontent-%COMP%] {\n  background-color: yellow;\n}\n\n.carousel[_ngcontent-%COMP%] {\n  overflow: scroll;\n  padding-left: 30px;\n  width: 90%;\n  margin: 0 auto;\n  position: relative;\n}\n\n.carousel-item[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  width: 200px;\n  height: 250px;\n  margin-right: 10px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: 450ms all;\n  transform-origin: center left;\n}\n\n.carousel__container[_ngcontent-%COMP%] {\n  transition: 450ms transform;\n  font-size: 0;\n  white-space: nowrap;\n  margin: 70px 0px;\n  padding-bottom: 10px;\n}\n\n.carousel__container[_ngcontent-%COMP%]:hover   .carousel-item[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.carousel__container[_ngcontent-%COMP%]:hover   .carousel-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  opacity: 1;\n}\n\n.carousel-item__details[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);\n  bottom: 0;\n  display: flex;\n  font-size: 10px;\n  flex-direction: column;\n  justify-content: flex-end;\n  left: 0;\n  opacity: 0;\n  transition: 450ms opacity;\n  padding: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.carousel-item__details--img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.carousel-item__img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 250px;\n  object-fit: cover;\n}\n\n.carousel-item[_ngcontent-%COMP%]:hover   .carousel-item__details[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.carousel-item__details--title[_ngcontent-%COMP%] {\n  color: white;\n  margin: 5px 0px 0px 0px;\n}\n\n.carousel-item__details--subtitle[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 8px;\n  margin: 3px 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFPSSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0ksd0JBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBTEo7O0FBU0E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBRVEsNkJBQUE7QUFOWjs7QUFTQTtFQUVJLDJCQUFBO0VBRUEsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQU5KOztBQVNBO0VBQ0ksWUFBQTtBQU5KOztBQVNBO0VBRVkscUJBQUE7RUFDUixVQUFBO0FBTko7O0FBVUE7RUFDSSx1QkFBQTtFQUNBLGlGQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQVBKOztBQVVBO0VBQ0ksV0FBQTtBQVBKOztBQVVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFFRyxpQkFBQTtBQVBQOztBQVVBO0VBQ0ksVUFBQTtBQVBKOztBQVVBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FBUEo7O0FBVUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFQSiIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdNYWluL3ByaW5jaXBhbC5qcGcnKTtcclxuICAgIC8vIGhlaWdodDogNDAwcHg7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ01haW4vcHJpbmNpcGFsLmpwZycpO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG59XHJcblxyXG4ucGludGFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwge1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbi5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDQ1MG1zIGFsbDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBsZWZ0O1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX2NvbnRhaW5lciB7XHJcbiAgICB0cmFuc2l0aW9uOiA0NTBtcyAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb246IDQ1MG1zIHRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb246IDQ1MG1zIHRyYW5zZm9ybSwgNDUwbXMgLXdlYmtpdC10cmFuc2Zvcm07XHJcbiAgICBmb250LXNpemU6IDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luOiA3MHB4IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX2NvbnRhaW5lcjpob3ZlciAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fY29udGFpbmVyOmhvdmVyIC5jYXJvdXNlbC1pdGVtOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuLmNhcm91c2VsLWl0ZW1fX2RldGFpbHMge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsMCwwLDAuOSkgMCUsIHJnYmEoMCwwLDAsMCkgMTAwJSk7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IDQ1MG1zIG9wYWNpdHk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtX19kZXRhaWxzLS1pbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtX19pbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuLmNhcm91c2VsLWl0ZW06aG92ZXIgLmNhcm91c2VsLWl0ZW1fX2RldGFpbHMge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNhcm91c2VsLWl0ZW1fX2RldGFpbHMtLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaXRlbV9fZGV0YWlscy0tc3VidGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBtYXJnaW46IDNweCAwcHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9902:
/*!*************************************************************!*\
  !*** ./src/app/share/components/banner/banner.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




function BannerComponent_ul_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 2)(1, "li", 3)(2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function BannerComponent_ul_16_Template_a_mouseover_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const i_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.seleccion(i_r1));
    })("mouseout", function BannerComponent_ul_16_Template_a_mouseout_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.seleccion(ctx_r4.salidaDeCampo));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r1, " ");
  }
}
// import { Router } from '@angular/router';
class BannerComponent {
  constructor() {
    this.salida = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.menu = [];
    this.menu = ["Characters", "Comics", "Movies"];
    this.salidaDeCampo = "fuera";
  }
  ngOnInit() {}
  seleccion(valor) {
    this.salida.emit(valor);
  }
  menu2(valor) {
    if (valor == "Characters") {
      // this.router.navigate(["menuComponent"]);
      console.log("has dado en Characters");
    }
    if (valor == "Comics") {
      // this.router.navigate(["menuComponent"]);
      console.log("has dado en Comics");
    }
    if (valor == "Movies") {
      // this.router.navigate(["menuComponent"]);
      console.log("has dado en Movies");
    }
    console.log("mensaje de prueba de click " + valor);
  }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) {
  return new (t || BannerComponent)();
};
BannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BannerComponent,
  selectors: [["app-banner"]],
  outputs: {
    salida: "salida"
  },
  decls: 17,
  vars: 1,
  consts: [[1, "containerBanner"], [1, "login"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "access", 1, "navbar-brand"], ["routerLink", "register", 1, "navbar-brand"], [1, "menu"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav", 4, "ngFor", "ngForOf"], [1, "navbar-brand", 3, "mouseover", "mouseout"]],
  template: function BannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ul", 2)(3, "li", 3)(4, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sing inn ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3)(7, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Join ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div")(10, "div", 6)(11, "nav", 7)(12, "div", 8)(13, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BannerComponent_ul_16_Template, 4, 1, "ul", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: [".containerBanner[_ngcontent-%COMP%] {\n  background-color: #212529;\n}\n\na[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n  margin-right: 3rem;\n}\n\n.login[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUVJLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSw0QkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lckJhbm5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5sb2dpbiBhe1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWVudSBhOmhvdmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 2379:
/*!*************************************************************!*\
  !*** ./src/app/share/components/footer/footer.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 36,
  vars: 0,
  consts: [[1, "containerFooter"], ["src", "assets/imgFooter/marvel.jpg", "alt", "Marvel", "title", "Marvel"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section")(2, "picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figcaption");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pagos Onlie");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section")(7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ABOUT MARVEL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HELP/FAQS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CAREERS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "INTERNSHIPS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section")(16, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ADVERTISING");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DISNEY+");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "MARVELHQ.COM");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "REDEEM DIGITAL COMICS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section")(25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "IMAGEN 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "IMAGEN 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section")(30, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "FOLLOW MARVEL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "IMAGEN 1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "IMAGEN 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  styles: ["section[_ngcontent-%COMP%] {\n  margin: 10rem;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.4rem;\n}\n\np[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.2rem;\n}\n\n.containerFooter[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  background-color: #212529;\n  column-gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw0REFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICBtYXJnaW46IDEwcmVtO1xyXG59XHJcblxyXG5oMntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXJGb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcclxuICAgIGNvbHVtbi1nYXA6IDFyZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7841:
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareModule": () => (/* binding */ ShareModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner/banner.component */ 9902);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 2379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class ShareModule {}
ShareModule.ɵfac = function ShareModule_Factory(t) {
  return new (t || ShareModule)();
};
ShareModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ShareModule
});
ShareModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShareModule, {
    declarations: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  Url_apiMarvel: 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d165ebdf45a5d723c1ad698d3db167c1&hash=69d5b299962d000cb0326f675e749f86',
  Url_apiBD: 'https://backendtecnofactory1.herokuapp.com/api/User/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map