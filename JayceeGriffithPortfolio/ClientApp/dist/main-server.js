(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./ClientApp/boot-server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ClientApp/Globals.ts":
/*!******************************!*\
  !*** ./ClientApp/Globals.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nserializejson */ "./node_modules/nserializejson/dist/cjs/index.js");
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nserializejson__WEBPACK_IMPORTED_MODULE_0__);
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};/**
 * Contains global isomorphic session.
 */var Globals=/** @class */function(){function Globals(){}Globals.reset=function(){this.isInitialized=false;this.data={};};Globals.init=function(data){if(this.isInitialized){throw Error("Globals is already initialized.");}this.data=data||{public:{},private:{}};this.isInitialized=true;// Use dot notation in name of the form inputs.
nserializejson__WEBPACK_IMPORTED_MODULE_0__["NSerializeJson"].options.useDotSeparatorInPath=true;};Globals.throwIfNotInitialized=function(){if(!this.isInitialized)throw Error("Globals is not initialized. You have to call Session.init before.");};Globals.getData=function(){this.throwIfNotInitialized();return this.data;};Globals.setData=function(data){this.throwIfNotInitialized();var oldData=this.data;this.data=__assign({},oldData,data);};Object.defineProperty(Globals,"serviceUser",{get:function(){return this.getData().public.serviceUser;},set:function(serviceUser){this.setData({public:{serviceUser:serviceUser}});},enumerable:true,configurable:true});Object.defineProperty(Globals,"isAuthenticated",{get:function(){return this.serviceUser!=null;},enumerable:true,configurable:true});Globals.isInitialized=false;Globals.data={};return Globals;}();/* harmony default export */ __webpack_exports__["default"] = (Globals);

/***/ }),

/***/ "./ClientApp/Ui.ts":
/*!*************************!*\
  !*** ./ClientApp/Ui.ts ***!
  \*************************/
/*! exports provided: Ui */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
var Ui=/** @class */function(){function Ui(){}Ui.showErrors=function(){var messages=[];for(var _i=0;_i<arguments.length;_i++){messages[_i]=arguments[_i];}messages.forEach(function(x){if(!Array.isArray(x)){react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(x);}else{x.forEach(function(y){return react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].error(y);});}});};Ui.showInfo=function(message){react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].info(message);};return Ui;}();

/***/ }),

/***/ "./ClientApp/boot-server.tsx":
/*!***********************************!*\
  !*** ./ClientApp/boot-server.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aspnet-prerendering */ "./node_modules/aspnet-prerendering/index.js");
/* harmony import */ var aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./ClientApp/routes.tsx");
/* harmony import */ var _configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./configureStore */ "./ClientApp/configureStore.ts");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_11__);
var renderHelmet=function(){var helmetData=react_helmet__WEBPACK_IMPORTED_MODULE_9__["Helmet"].renderStatic();var helmetStrings="";for(var key in helmetData){if(helmetData.hasOwnProperty(key)){helmetStrings+=helmetData[key].toString();}}return helmetStrings;};var createGlobals=function(nodeSession,initialReduxState,helmetStrings){return{completedTasks:domain_wait__WEBPACK_IMPORTED_MODULE_11__["completedTasks"],nodeSession:nodeSession,initialReduxState:initialReduxState,helmetStrings:helmetStrings};};/* harmony default export */ __webpack_exports__["default"] = (Object(aspnet_prerendering__WEBPACK_IMPORTED_MODULE_6__["createServerRenderer"])(function(params){_Globals__WEBPACK_IMPORTED_MODULE_10__["default"].reset();_Globals__WEBPACK_IMPORTED_MODULE_10__["default"].init(params.data);return new Promise(function(resolve,reject){// Prepare Redux store with in-memory history, and dispatch a navigation event.
// corresponding to the incoming URL.
var basename=params.baseUrl.substring(0,params.baseUrl.length-1);// Remove trailing slash.
var urlAfterBasename=params.url.substring(basename.length);var store=Object(_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(history__WEBPACK_IMPORTED_MODULE_5__["createMemoryHistory"])());store.dispatch(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_4__["replace"])(urlAfterBasename));// Prepare an instance of the application and perform an inital render that will
// cause any async tasks (e.g., data access) to begin.
var routerContext={};var app=react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"],{store:store},react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_3__["StaticRouter"],{basename:basename,context:routerContext,location:params.location.path,children:_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]}));var renderApp=function(){return Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(app);};renderApp();// If there's a redirection, just send this information back to the host application.
if(routerContext.url){resolve({redirectUrl:routerContext.url,globals:createGlobals(params.data,store.getState(),renderHelmet())});return;}// Once any async tasks are done, we can perform the final render.
// We also send the redux store state, so the client can continue execution where the server left off.
params.domainTasks.then(function(){resolve({html:renderApp(),globals:createGlobals(params.data,store.getState(),renderHelmet())});},reject);// Also propagate any errors back into the host application.
});}));

/***/ }),

/***/ "./ClientApp/components/person/PersonEditor.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/person/PersonEditor.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_shared_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/shared/Form */ "./ClientApp/components/shared/Form.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var PersonEditor=/** @class */function(_super){__extends(PersonEditor,_super);function PersonEditor(props){return _super.call(this,props)||this;}PersonEditor.prototype.emptyForm=function(){if(this.elForm){this.elForm.emptyForm();}};PersonEditor.prototype.componentDidMount=function(){};PersonEditor.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Formik"],{enableReinitialize:true,initialValues:{firstName:this.props.data.firstName||'',lastName:this.props.data.lastName||''},onSubmit:function(values,_a){var setSubmitting=_a.setSubmitting;}},function(_a){var values=_a.values,errors=_a.errors,touched=_a.touched,handleChange=_a.handleChange,handleBlur=_a.handleBlur,handleSubmit=_a.handleSubmit,isSubmitting=_a.isSubmitting;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_shared_Form__WEBPACK_IMPORTED_MODULE_2__["Form"],{className:"form",ref:function(x){return _this.elForm=x;}},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"hidden",name:"id",defaultValue:(_this.props.data.id||0).toString()}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label",{className:"control-label required",htmlFor:"person__firstName"},"First name"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"text",className:"form-control",id:"person__firstName",name:"firstName","data-value-type":"string","data-val-required":"true","data-msg-required":"First name is required.",value:values.firstName,onChange:handleChange,onBlur:handleBlur})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label",{className:"control-label required",htmlFor:"person__lastName"},"Last name"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input",{type:"text",className:"form-control",id:"person__lastName",name:"lastName","data-value-type":"string","data-val-required":"true","data-msg-required":"Last name is required.",value:values.lastName,onChange:handleChange,onBlur:handleBlur})));});};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_1___default.a],PersonEditor.prototype,"emptyForm",null);return PersonEditor;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (PersonEditor);

/***/ }),

/***/ "./ClientApp/components/shared/AppComponent.tsx":
/*!******************************************************!*\
  !*** ./ClientApp/components/shared/AppComponent.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_1__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};/**
 * This component contains helpful method which
 * allows you to make "force update" of the stuck elements.
 */var AppComponent=/** @class */function(_super){__extends(AppComponent,_super);function AppComponent(props){var _this=_super.call(this,props)||this;/**
         * Place it into the "key" attribute of an element.
         */_this.renderKey=0;return _this;}/**
     * Call this if component state is stuck.
     * But you should set the renderKey to the element's attribute.
     */AppComponent.prototype.forceUpdate=function(){this.renderKey=Math.random();};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_1___default.a],AppComponent.prototype,"forceUpdate",null);return AppComponent;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (AppComponent);

/***/ }),

/***/ "./ClientApp/components/shared/AppRoute.tsx":
/*!**************************************************!*\
  !*** ./ClientApp/components/shared/AppRoute.tsx ***!
  \**************************************************/
/*! exports provided: AppRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoute", function() { return AppRoute; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __rest=undefined&&undefined.__rest||function(s,e){var t={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)if(e.indexOf(p[i])<0)t[p[i]]=s[p[i]];return t;};var AppRoute=function(_a){var Component=_a.component,Layout=_a.layout,Path=_a.path,rest=__rest(_a,["component","layout","path"]);var isAdminPath=Path==="/admin";var isLoginPath=Path==="/login";if(!_Globals__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated&&isAdminPath){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"],{to:"/login"});}if(_Globals__WEBPACK_IMPORTED_MODULE_2__["default"].isAuthenticated&&isLoginPath){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Redirect"],{to:"/"});}return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_0__["Route"],__assign({},rest,{render:function(props){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Layout,null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component,__assign({},props)));}}));};

/***/ }),

/***/ "./ClientApp/components/shared/Footer.tsx":
/*!************************************************!*\
  !*** ./ClientApp/components/shared/Footer.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Footer=/** @class */function(_super){__extends(Footer,_super);function Footer(props){return _super.call(this,props)||this;}Footer.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer",{className:"footer text-center"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",null,"View on ",react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"https://github.com/jgriffith3433"},"GitHub")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",null,"Copyright (c) 2019 Jaycee Griffith"));};return Footer;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./ClientApp/components/shared/Form.tsx":
/*!**********************************************!*\
  !*** ./ClientApp/components/shared/Form.tsx ***!
  \**********************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nserializejson */ "./node_modules/nserializejson/dist/cjs/index.js");
/* harmony import */ var nserializejson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nserializejson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var nval_tippy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nval-tippy */ "./node_modules/nval-tippy/dist/cjs/index.js");
/* harmony import */ var nval_tippy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nval_tippy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_4__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var Form=/** @class */function(_super){__extends(Form,_super);function Form(props){return _super.call(this,props)||this;}Form.prototype.isValid=function(){return this.validator.isValid();};Form.prototype.emptyForm=function(){Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["emptyForm"])(this.elForm);};Form.prototype.getData=function(){return nserializejson__WEBPACK_IMPORTED_MODULE_1__["NSerializeJson"].serializeForm(this.elForm);};Form.prototype.componentDidMount=function(){this.validator=new nval_tippy__WEBPACK_IMPORTED_MODULE_3__["NValTippy"](this.elForm);};Form.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form",__assign({},this.props,{ref:function(x){return _this.elForm=x;}}),this.props.children);};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"isValid",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"emptyForm",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_4___default.a],Form.prototype,"getData",null);return Form;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/Loader.tsx":
/*!************************************************!*\
  !*** ./ClientApp/components/shared/Loader.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/loader.scss */ "./ClientApp/styles/loader.scss");
/* harmony import */ var _Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_loader_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Components_shared_AppComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/AppComponent */ "./ClientApp/components/shared/AppComponent.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var Loader=/** @class */function(_super){__extends(Loader,_super);function Loader(props){return _super.call(this,props)||this;}Loader.prototype.render=function(){var css={"display":"none"};if(!Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["isNode"])()){css={"display":this.props.show?"block":"none"};}return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{key:this.renderKey,className:"loader-bg",style:css},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle1 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle2 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle3 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle4 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle5 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle6 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle7 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle8 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle9 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle10 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle11 sk-child"}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"sk-circle12 sk-child"})));};return Loader;}(_Components_shared_AppComponent__WEBPACK_IMPORTED_MODULE_3__["default"]);/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./ClientApp/components/shared/ModalComponent.tsx":
/*!********************************************************!*\
  !*** ./ClientApp/components/shared/ModalComponent.tsx ***!
  \********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap3-native */ "./node_modules/bootstrap3-native/index.js");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var ModalComponent=/** @class */function(_super){__extends(ModalComponent,_super);function ModalComponent(props){return _super.call(this,props)||this;}ModalComponent.prototype.show=function(){this.modalPlugin.show();};ModalComponent.prototype.hide=function(){this.modalPlugin.hide();};ModalComponent.prototype.componentDidMount=function(){var _this=this;this.modalPlugin=new bootstrap3_native__WEBPACK_IMPORTED_MODULE_1__["Modal"](this.elModal);if(this.props.onShow){this.elModal.addEventListener("show.bs.modal",function(){return _this.props.onShow();});}if(this.props.onHide){this.elModal.addEventListener("hide.bs.modal",function(){return _this.props.onHide();});}};ModalComponent.prototype.componentWillUnmount=function(){this.modalPlugin.hide();};ModalComponent.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal fade",tabIndex:-1,role:"dialog",ref:function(x){return _this.elModal=x;}},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-dialog",role:"document"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-content"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-header"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{"aria-hidden":"true"},"\u00D7")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h4",{className:"modal-title"},this.props.title)),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-body"},this.props.children),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"modal-footer"},this.props.buttons))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],ModalComponent.prototype,"show",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],ModalComponent.prototype,"hide",null);return ModalComponent;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/PagingBar.tsx":
/*!***************************************************!*\
  !*** ./ClientApp/components/shared/PagingBar.tsx ***!
  \***************************************************/
/*! exports provided: PagingBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingBar", function() { return PagingBar; });
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-paginating */ "./node_modules/react-paginating/dist/index.js");
/* harmony import */ var react_paginating__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_paginating__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_2__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};/* Below code of the 'Pagination' component was taken
from the https://github.com/ChoTotOSS/react-paginating
and remaked for the Bootstrap style. */var PagingBar=/** @class */function(_super){__extends(PagingBar,_super);function PagingBar(props){return _super.call(this,props)||this;}PagingBar.prototype.setFirstPage=function(){this.elFirstPageBtn.click();};PagingBar.prototype.setLastPage=function(){this.elLastPageBtn.click();};PagingBar.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_paginating__WEBPACK_IMPORTED_MODULE_0___default.a,{total:this.props.totalResults,limit:this.props.limitPerPage,currentPage:this.props.currentPage},function(_a){var pages=_a.pages,currentPage=_a.currentPage,hasNextPage=_a.hasNextPage,hasPreviousPage=_a.hasPreviousPage,previousPage=_a.previousPage,nextPage=_a.nextPage,totalPages=_a.totalPages,getPageItemProps=_a.getPageItemProps;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("ul",{className:"pagination"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:1,onPageChange:_this.props.onChangePage}),{ref:function(x){return _this.elFirstPageBtn=x;}}),"first")),hasPreviousPage&&react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:previousPage,onPageChange:_this.props.onChangePage})),'<')),pages.map(function(page){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",{key:page,className:page===currentPage?'active':''},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:page,onPageChange:_this.props.onChangePage})),page));}),hasNextPage&&react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:nextPage,onPageChange:_this.props.onChangePage})),'>')),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span",__assign({},getPageItemProps({pageValue:totalPages,onPageChange:_this.props.onChangePage}),{ref:function(x){return _this.elLastPageBtn=x;}}),"last")));});};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],PagingBar.prototype,"setFirstPage",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_2___default.a],PagingBar.prototype,"setLastPage",null);return PagingBar;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/***/ }),

/***/ "./ClientApp/components/shared/TopMenu.tsx":
/*!*************************************************!*\
  !*** ./ClientApp/components/shared/TopMenu.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
/* harmony import */ var _Services_AccountService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Services/AccountService */ "./ClientApp/services/AccountService.ts");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap3-native */ "./node_modules/bootstrap3-native/index.js");
/* harmony import */ var bootstrap3_native__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_6__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var TopMenu=/** @class */function(_super){__extends(TopMenu,_super);function TopMenu(props){var _this=_super.call(this,props)||this;_this.state={logoutAction:false};return _this;}TopMenu.prototype.onClickSignOut=function(e){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(_a){switch(_a.label){case 0:e.preventDefault();return[4/*yield*/,_Services_AccountService__WEBPACK_IMPORTED_MODULE_4__["default"].logout()];case 1:_a.sent();this.setState({logoutAction:true});return[2/*return*/];}});});};TopMenu.prototype.componentDidMount=function(){var dropdown=new bootstrap3_native__WEBPACK_IMPORTED_MODULE_5__["Dropdown"](this.elDropdown);};TopMenu.prototype.componentDidUpdate=function(){};TopMenu.prototype.render=function(){var _this=this;if(this.state.logoutAction){window.location.reload();}return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"navbar navbar-default"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"container-fluid"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{className:"navbar-header"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"sr-only"},"Toggle navigation"),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"}),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"icon-bar"})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{className:"navbar-brand",href:"#"},"Jaycee Griffith")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",{id:"navbar",className:"navbar-collapse collapse nav navbar-nav navbar-right"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul",{className:"nav navbar-nav"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],{exact:true,to:'/',activeClassName:"active"},"Home")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],{exact:true,to:'/portfolio',activeClassName:"active"},"Portfolio")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"],{exact:true,to:'/admin',activeClassName:"active"},"Admin")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",{className:"dropdown"},react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"#",ref:function(x){return _this.elDropdown=x;},className:"dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].serviceUser?_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].serviceUser.login:null,"\u00A0",react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span",{className:"caret"})),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul",{className:"dropdown-menu"},_Globals__WEBPACK_IMPORTED_MODULE_3__["default"].serviceUser?react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"#",onClick:this.onClickSignOut},"Sign out")):react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a",{href:"/login"},"Sign in"))))))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_6___default.a],TopMenu.prototype,"onClickSignOut",null);return TopMenu;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(TopMenu));

/***/ }),

/***/ "./ClientApp/configureStore.ts":
/*!*************************************!*\
  !*** ./ClientApp/configureStore.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/lib/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./ClientApp/store/index.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};function configureStore(history,initialState){// Build middleware. These are functions that can process the actions before they reach the store.
var windowIfDefined=typeof window==='undefined'?null:window;// If devTools is installed, connect to it
var devToolsExtension=windowIfDefined&&windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;var createStoreWithMiddleware=Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a,Object(connected_react_router__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(history)),devToolsExtension?devToolsExtension():function(next){return next;})(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"]);// Combine all reducers and instantiate the app-wide store instance
var allReducers=buildRootReducer(_store__WEBPACK_IMPORTED_MODULE_3__["reducers"],history);var store=createStoreWithMiddleware(allReducers,initialState);// Enable Webpack hot module replacement for reducers
if(false){}return store;}var routerReducer=function(history){var initialState={location:history.location,action:history.action};return function(state,arg){if(state===void 0){state=initialState;}if(arg===void 0){arg={};}if(arg.type===connected_react_router__WEBPACK_IMPORTED_MODULE_2__["LOCATION_CHANGE"]){return __assign({},state,arg.payload);}return state;};};function buildRootReducer(allReducers,history){return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(__assign({},allReducers,{router:routerReducer(history)}));}

/***/ }),

/***/ "./ClientApp/layouts/AuthorizedLayout.tsx":
/*!************************************************!*\
  !*** ./ClientApp/layouts/AuthorizedLayout.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/TopMenu */ "./ClientApp/components/shared/TopMenu.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Styles/authorizedLayout.scss */ "./ClientApp/styles/authorizedLayout.scss");
/* harmony import */ var _Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_authorizedLayout_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/shared/Footer */ "./ClientApp/components/shared/Footer.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var AuthorizedLayout=/** @class */function(_super){__extends(AuthorizedLayout,_super);function AuthorizedLayout(){return _super!==null&&_super.apply(this,arguments)||this;}AuthorizedLayout.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{id:"authorizedLayout",className:"layout"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__["default"],null),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"container container-content"},this.props.children),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"],null)),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__["default"],null));};return AuthorizedLayout;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (AuthorizedLayout);

/***/ }),

/***/ "./ClientApp/layouts/GuestLayout.tsx":
/*!*******************************************!*\
  !*** ./ClientApp/layouts/GuestLayout.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/TopMenu */ "./ClientApp/components/shared/TopMenu.tsx");
/* harmony import */ var _Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Styles/guestLayout.scss */ "./ClientApp/styles/guestLayout.scss");
/* harmony import */ var _Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_guestLayout_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/shared/Footer */ "./ClientApp/components/shared/Footer.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var GuestLayout=/** @class */function(_super){__extends(GuestLayout,_super);function GuestLayout(){return _super!==null&&_super.apply(this,arguments)||this;}GuestLayout.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div",{id:"guestLayout",className:"layout"},react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Components_shared_TopMenu__WEBPACK_IMPORTED_MODULE_0__["default"],null),react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div",{className:"container container-content"},this.props.children),react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"],null)),react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Components_shared_Footer__WEBPACK_IMPORTED_MODULE_4__["default"],null));};return GuestLayout;}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (GuestLayout);

/***/ }),

/***/ "./ClientApp/models/Result.ts":
/*!************************************!*\
  !*** ./ClientApp/models/Result.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Result=/** @class */function(){function Result(value){var errors=[];for(var _i=1;_i<arguments.length;_i++){errors[_i-1]=arguments[_i];}this.value=value;this.errors=errors[0]==undefined||errors[0]==null?[]:errors;}Object.defineProperty(Result.prototype,"hasErrors",{get:function(){return this.errors!=null&&Array.isArray(this.errors)&&this.errors.length>0;},enumerable:true,configurable:true});return Result;}();/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ }),

/***/ "./ClientApp/pages/AdminPage.tsx":
/*!***************************************!*\
  !*** ./ClientApp/pages/AdminPage.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/shared/PagingBar */ "./ClientApp/components/shared/PagingBar.tsx");
/* harmony import */ var _Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/person/PersonEditor */ "./ClientApp/components/person/PersonEditor.tsx");
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/shared/ModalComponent */ "./ClientApp/components/shared/ModalComponent.tsx");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/awesome-debounce-promise.js");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var AdminPage=/** @class */function(_super){__extends(AdminPage,_super);function AdminPage(props){var _this=_super.call(this,props)||this;_this.state={searchTerm:"",pageNum:1,limitPerPage:5,rowOffset:0,modelForEdit:{}};_this.debouncedSearch=awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11___default()(function(term){props.searchRequest(term);},500);return _this;}AdminPage.prototype.componentWillMount=function(){this.props.searchRequest();};AdminPage.prototype.componentWillUnmount=function(){if(this.elModalAdd){this.elModalAdd.hide();}if(this.elModalEdit){this.elModalEdit.hide();}if(this.elModalDelete){this.elModalDelete.hide();}};AdminPage.prototype.onChangePage=function(pageNum){var rowOffset=Math.ceil((pageNum-1)*this.state.limitPerPage);this.setState({pageNum:pageNum,rowOffset:rowOffset});};AdminPage.prototype.onClickShowAddModal=function(e){this.elModalAdd.show();};AdminPage.prototype.onClickShowEditModal=function(e,modelForEdit){this.setState({modelForEdit:modelForEdit});this.elModalEdit.show();};AdminPage.prototype.onClickShowDeleteModal=function(e,modelForEdit){this.setState({modelForEdit:modelForEdit});this.elModalDelete.show();};AdminPage.prototype.onClickPersonEditorAdd__saveBtn=function(e){e.preventDefault();if(!this.personEditorAdd.elForm.isValid()){return;}this.props.addRequest(this.personEditorAdd.elForm.getData());this.pagingBar.setLastPage();this.elModalAdd.hide();};AdminPage.prototype.onClickPersonEditorEdit__saveBtn=function(e){if(!this.personEditorEdit.elForm.isValid()){return;}var data=this.personEditorEdit.elForm.getData();this.props.updateRequest(data);this.elModalEdit.hide();};AdminPage.prototype.onClickPersonEditorDelete__saveBtn=function(e){this.props.deleteRequest(this.state.modelForEdit.id);this.elModalDelete.hide();};AdminPage.prototype.renderRow=function(person){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr",{key:person.id},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,person.firstName),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,person.lastName),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-info",onClick:function(x){return _this.onClickShowEditModal(x,person);}},"Edit"),"\u00A0",react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-danger",onClick:function(x){return _this.onClickShowDeleteModal(x,person);}},"Delete")));};AdminPage.prototype.renderRows=function(data){var _this=this;return data.slice(this.state.rowOffset,this.state.rowOffset+this.state.limitPerPage).map(function(x){return _this.renderRow(x);});};AdminPage.prototype.onChangeSearchInput=function(e){var val=e.currentTarget.value;this.debouncedSearch(val);this.pagingBar.setFirstPage();};AdminPage.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title",null,"Jaycee Griffith - Portfolio")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__["default"],{show:this.props.indicators.operationLoading}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"panel panel-default"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"panel-body row"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"col-sm-1"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-success",onClick:this.onClickShowAddModal},"Add")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"col-sm-11"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input",{type:"text",className:"form-control",defaultValue:"",onChange:this.onChangeSearchInput,placeholder:"Search for people..."})))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table",{className:"table"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null,"First name"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null,"Last name"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody",null,this.renderRows(this.props.people))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalAdd=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-primary",onClick:this.onClickPersonEditorAdd__saveBtn},"Save")),title:"Add person",onHide:function(){if(_this.personEditorAdd){_this.personEditorAdd.emptyForm();}}},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["default"],{ref:function(x){return _this.personEditorAdd=x;},data:{}})),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalEdit=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-primary",onClick:this.onClickPersonEditorEdit__saveBtn},"Save")),title:"Edit person: "+this.state.modelForEdit.firstName+" "+this.state.modelForEdit.lastName,onHide:function(){if(_this.personEditorEdit){_this.setState({modelForEdit:{}});}}},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["default"],{ref:function(x){return _this.personEditorEdit=x;},data:this.state.modelForEdit})),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalDelete=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-danger",onClick:this.onClickPersonEditorDelete__saveBtn},"Delete")),title:"Delete person: "+this.state.modelForEdit.firstName+" "+this.state.modelForEdit.lastName},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p",null,"Do you really want to delete this person?")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__["PagingBar"],{ref:function(x){return _this.pagingBar=x;},totalResults:this.props.people.length,limitPerPage:this.state.limitPerPage,currentPage:this.state.pageNum,onChangePage:this.onChangePage}));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"onChangePage",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"onClickShowAddModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"onClickShowEditModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"onClickShowDeleteModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"onClickPersonEditorAdd__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"onClickPersonEditorEdit__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"onClickPersonEditorDelete__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"renderRow",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"renderRows",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],AdminPage.prototype,"onChangeSearchInput",null);return AdminPage;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);var component=Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function(state){return state.person;},// Selects which state properties are merged into the component's props.
_Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__["PersonStore"].actionCreators// Selects which action creators are merged into the component's props.
)(AdminPage);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/pages/HomePage.tsx":
/*!**************************************!*\
  !*** ./ClientApp/pages/HomePage.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var HomePage=/** @class */function(_super){__extends(HomePage,_super);function HomePage(props){return _super.call(this,props)||this;}HomePage.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_1__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title",null,"Jaycee Griffith - Home")),react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p",{className:"text-center",style:{"fontSize":"52px"}},"Happy coding!"));};return HomePage;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./ClientApp/pages/LoginPage.tsx":
/*!***************************************!*\
  !*** ./ClientApp/pages/LoginPage.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var _Store_LoginStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Store/LoginStore */ "./ClientApp/store/LoginStore.ts");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_shared_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Form */ "./ClientApp/components/shared/Form.tsx");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};;var LoginPage=/** @class */function(_super){__extends(LoginPage,_super);function LoginPage(props){return _super.call(this,props)||this;}LoginPage.prototype.componentDidMount=function(){this.props.init();if(this.elLoader){this.elLoader.forceUpdate();}};LoginPage.prototype.onClickSubmitBtn=function(e){return __awaiter(this,void 0,void 0,function(){var data;return __generator(this,function(_a){e.preventDefault();if(this.elForm.isValid()){data=this.elForm.getData();this.props.loginRequest(data);}return[2/*return*/];});});};LoginPage.prototype.render=function(){var _this=this;if(this.props.indicators.loginSuccess){return react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_router__WEBPACK_IMPORTED_MODULE_6__["Redirect"],{to:"/"});}return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{id:"loginPage"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_4__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("title",null,"Login page - Jaycee Griffith")),react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_0__["default"],{ref:function(x){return _this.elLoader=x;},show:this.props.indicators.operationLoading}),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{id:"loginContainer"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p",{className:"text-center"},"Type any login and password to enter."),react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Components_shared_Form__WEBPACK_IMPORTED_MODULE_8__["Form"],{ref:function(x){return _this.elForm=x;}},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label",{htmlFor:"inputLogin"},"Login"),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input",{type:"text",name:"login","data-value-type":"string",className:"form-control",id:"inputLogin","data-val-required":"true","data-msg-required":"Login is required."})),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label",{htmlFor:"inputLogin"},"Password"),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("input",{type:"password",name:"password","data-value-type":"string",className:"form-control",id:"inputPassword","data-val-required":"true","data-msg-required":"Password is required."})),react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div",{className:"form-inline"},react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button",{className:"btn btn-success",onClick:this.onClickSubmitBtn},"Sign in")))));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_7___default.a],LoginPage.prototype,"onClickSubmitBtn",null);return LoginPage;}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);var component=Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function(state){return state.login;},// Selects which state properties are merged into the component's props
_Store_LoginStore__WEBPACK_IMPORTED_MODULE_1__["LoginStore"].actionCreators// Selects which action creators are merged into the component's props
)(LoginPage);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/pages/PortfolioPage.tsx":
/*!*******************************************!*\
  !*** ./ClientApp/pages/PortfolioPage.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Styles/main.scss */ "./ClientApp/styles/main.scss");
/* harmony import */ var _Styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/lib/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/shared/PagingBar */ "./ClientApp/components/shared/PagingBar.tsx");
/* harmony import */ var _Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/person/PersonEditor */ "./ClientApp/components/person/PersonEditor.tsx");
/* harmony import */ var _Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/shared/Loader */ "./ClientApp/components/shared/Loader.tsx");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bind-decorator */ "./node_modules/bind-decorator/index.js");
/* harmony import */ var bind_decorator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bind_decorator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/shared/ModalComponent */ "./ClientApp/components/shared/ModalComponent.tsx");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/awesome-debounce-promise.js");
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11__);
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __decorate=undefined&&undefined.__decorate||function(decorators,target,key,desc){var c=arguments.length,r=c<3?target:desc===null?desc=Object.getOwnPropertyDescriptor(target,key):desc,d;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)if(d=decorators[i])r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r;return c>3&&r&&Object.defineProperty(target,key,r),r;};var PortfolioPage=/** @class */function(_super){__extends(PortfolioPage,_super);function PortfolioPage(props){var _this=_super.call(this,props)||this;_this.state={searchTerm:"",pageNum:1,limitPerPage:5,rowOffset:0,modelForEdit:{}};_this.debouncedSearch=awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_11___default()(function(term){props.searchRequest(term);},500);return _this;}PortfolioPage.prototype.componentWillMount=function(){this.props.searchRequest();};PortfolioPage.prototype.componentWillUnmount=function(){if(this.elModalAdd){this.elModalAdd.hide();}if(this.elModalEdit){this.elModalEdit.hide();}if(this.elModalDelete){this.elModalDelete.hide();}};PortfolioPage.prototype.onChangePage=function(pageNum){var rowOffset=Math.ceil((pageNum-1)*this.state.limitPerPage);this.setState({pageNum:pageNum,rowOffset:rowOffset});};PortfolioPage.prototype.onClickShowAddModal=function(e){this.elModalAdd.show();};PortfolioPage.prototype.onClickShowEditModal=function(e,modelForEdit){this.setState({modelForEdit:modelForEdit});this.elModalEdit.show();};PortfolioPage.prototype.onClickShowDeleteModal=function(e,modelForEdit){this.setState({modelForEdit:modelForEdit});this.elModalDelete.show();};PortfolioPage.prototype.onClickPersonEditorAdd__saveBtn=function(e){e.preventDefault();if(!this.personEditorAdd.elForm.isValid()){return;}this.props.addRequest(this.personEditorAdd.elForm.getData());this.pagingBar.setLastPage();this.elModalAdd.hide();};PortfolioPage.prototype.onClickPersonEditorEdit__saveBtn=function(e){if(!this.personEditorEdit.elForm.isValid()){return;}var data=this.personEditorEdit.elForm.getData();this.props.updateRequest(data);this.elModalEdit.hide();};PortfolioPage.prototype.onClickPersonEditorDelete__saveBtn=function(e){this.props.deleteRequest(this.state.modelForEdit.id);this.elModalDelete.hide();};PortfolioPage.prototype.renderRow=function(person){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr",{key:person.id},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,person.firstName),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,person.lastName),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("td",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-info",onClick:function(x){return _this.onClickShowEditModal(x,person);}},"Edit"),"\u00A0",react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-danger",onClick:function(x){return _this.onClickShowDeleteModal(x,person);}},"Delete")));};PortfolioPage.prototype.renderRows=function(data){var _this=this;return data.slice(this.state.rowOffset,this.state.rowOffset+this.state.limitPerPage).map(function(x){return _this.renderRow(x);});};PortfolioPage.prototype.onChangeSearchInput=function(e){var val=e.currentTarget.value;this.debouncedSearch(val);this.pagingBar.setFirstPage();};PortfolioPage.prototype.render=function(){var _this=this;return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_helmet__WEBPACK_IMPORTED_MODULE_2__["Helmet"],null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("title",null,"Jaycee Griffith - Portfolio")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_Loader__WEBPACK_IMPORTED_MODULE_8__["default"],{show:this.props.indicators.operationLoading}),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"panel panel-default"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"panel-body row"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"col-sm-1"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{className:"btn btn-success",onClick:this.onClickShowAddModal},"Add")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",{className:"col-sm-11"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input",{type:"text",className:"form-control",defaultValue:"",onChange:this.onChangeSearchInput,placeholder:"Search for people..."})))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("table",{className:"table"},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("thead",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tr",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null,"First name"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null,"Last name"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("th",null))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("tbody",null,this.renderRows(this.props.people))),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalAdd=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-primary",onClick:this.onClickPersonEditorAdd__saveBtn},"Save")),title:"Add person",onHide:function(){if(_this.personEditorAdd){_this.personEditorAdd.emptyForm();}}},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["default"],{ref:function(x){return _this.personEditorAdd=x;},data:{}})),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalEdit=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-primary",onClick:this.onClickPersonEditorEdit__saveBtn},"Save")),title:"Edit person: "+this.state.modelForEdit.firstName+" "+this.state.modelForEdit.lastName,onHide:function(){if(_this.personEditorEdit){_this.setState({modelForEdit:{}});}}},react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_person_PersonEditor__WEBPACK_IMPORTED_MODULE_7__["default"],{ref:function(x){return _this.personEditorEdit=x;},data:this.state.modelForEdit})),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_ModalComponent__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"],{ref:function(x){return _this.elModalDelete=x;},buttons:react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div",null,react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-default","data-dismiss":"modal"},"Close"),react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button",{type:"button",className:"btn btn-danger",onClick:this.onClickPersonEditorDelete__saveBtn},"Delete")),title:"Delete person: "+this.state.modelForEdit.firstName+" "+this.state.modelForEdit.lastName},react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p",null,"Do you really want to delete this person?")),react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_shared_PagingBar__WEBPACK_IMPORTED_MODULE_6__["PagingBar"],{ref:function(x){return _this.pagingBar=x;},totalResults:this.props.people.length,limitPerPage:this.state.limitPerPage,currentPage:this.state.pageNum,onChangePage:this.onChangePage}));};__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"onChangePage",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"onClickShowAddModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"onClickShowEditModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"onClickShowDeleteModal",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"onClickPersonEditorAdd__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"onClickPersonEditorEdit__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"onClickPersonEditorDelete__saveBtn",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"renderRow",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"renderRows",null);__decorate([bind_decorator__WEBPACK_IMPORTED_MODULE_9___default.a],PortfolioPage.prototype,"onChangeSearchInput",null);return PortfolioPage;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);var component=Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function(state){return state.person;},// Selects which state properties are merged into the component's props.
_Store_PersonStore__WEBPACK_IMPORTED_MODULE_4__["PersonStore"].actionCreators// Selects which action creators are merged into the component's props.
)(PortfolioPage);/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(component));

/***/ }),

/***/ "./ClientApp/routes.tsx":
/*!******************************!*\
  !*** ./ClientApp/routes.tsx ***!
  \******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _Layouts_AuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Layouts/AuthorizedLayout */ "./ClientApp/layouts/AuthorizedLayout.tsx");
/* harmony import */ var _Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Layouts/GuestLayout */ "./ClientApp/layouts/GuestLayout.tsx");
/* harmony import */ var _Pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Pages/LoginPage */ "./ClientApp/pages/LoginPage.tsx");
/* harmony import */ var _Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/shared/AppRoute */ "./ClientApp/components/shared/AppRoute.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_HomePage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Pages/HomePage */ "./ClientApp/pages/HomePage.tsx");
/* harmony import */ var _Pages_PortfolioPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Pages/PortfolioPage */ "./ClientApp/pages/PortfolioPage.tsx");
/* harmony import */ var _Pages_AdminPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Pages/AdminPage */ "./ClientApp/pages/AdminPage.tsx");
var routes=react__WEBPACK_IMPORTED_MODULE_4__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"],null,react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__["default"],exact:true,path:"/login",component:_Pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"]}),react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__["default"],exact:true,path:"/",component:_Pages_HomePage__WEBPACK_IMPORTED_MODULE_6__["default"]}),react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_GuestLayout__WEBPACK_IMPORTED_MODULE_1__["default"],exact:true,path:"/portfolio",component:_Pages_PortfolioPage__WEBPACK_IMPORTED_MODULE_7__["default"]}),react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_shared_AppRoute__WEBPACK_IMPORTED_MODULE_3__["AppRoute"],{layout:_Layouts_AuthorizedLayout__WEBPACK_IMPORTED_MODULE_0__["default"],exact:true,path:"/admin",component:_Pages_AdminPage__WEBPACK_IMPORTED_MODULE_8__["default"]}));

/***/ }),

/***/ "./ClientApp/services/AccountService.ts":
/*!**********************************************!*\
  !*** ./ClientApp/services/AccountService.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceBase */ "./ClientApp/services/ServiceBase.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var AccountService=/** @class */function(_super){__extends(AccountService,_super);function AccountService(){return _super!==null&&_super.apply(this,arguments)||this;}AccountService.login=function(loginModel){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"api/Account/Login",method:"POST",data:loginModel})];case 1:result=_a.sent();if(!result.hasErrors){_Globals__WEBPACK_IMPORTED_MODULE_1__["default"].serviceUser=result.value;}return[2/*return*/,result];}});});};AccountService.logout=function(){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"api/Account/Logout",method:"POST"})];case 1:result=_a.sent();if(!result.hasErrors){_Globals__WEBPACK_IMPORTED_MODULE_1__["default"].serviceUser=null;}return[2/*return*/,result];}});});};return AccountService;}(_ServiceBase__WEBPACK_IMPORTED_MODULE_0__["ServiceBase"]);/* harmony default export */ __webpack_exports__["default"] = (AccountService);

/***/ }),

/***/ "./ClientApp/services/PersonService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/services/PersonService.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_ServiceBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Services/ServiceBase */ "./ClientApp/services/ServiceBase.ts");
var __extends=undefined&&undefined.__extends||function(){var extendStatics=function(d,b){extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b;}||function(d,b){for(var p in b)if(b.hasOwnProperty(p))d[p]=b[p];};return extendStatics(d,b);};return function(d,b){extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __());};}();var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var PersonService=/** @class */function(_super){__extends(PersonService,_super);function PersonService(){return _super!==null&&_super.apply(this,arguments)||this;}PersonService.search=function(term){if(term===void 0){term=null;}return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:if(term==null){term="";}return[4/*yield*/,this.requestJson({url:"/api/Person/Search?term="+term,method:"GET"})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.update=function(model){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person",method:"PATCH",data:model})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.delete=function(id){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person/"+id,method:"DELETE"})];case 1:result=_a.sent();return[2/*return*/,result];}});});};PersonService.add=function(model){return __awaiter(this,void 0,Promise,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,this.requestJson({url:"/api/Person/Add",method:"POST",data:model})];case 1:result=_a.sent();return[2/*return*/,result];}});});};return PersonService;}(_Services_ServiceBase__WEBPACK_IMPORTED_MODULE_0__["ServiceBase"]);/* harmony default export */ __webpack_exports__["default"] = (PersonService);

/***/ }),

/***/ "./ClientApp/services/ServiceBase.ts":
/*!*******************************************!*\
  !*** ./ClientApp/services/ServiceBase.ts ***!
  \*******************************************/
/*! exports provided: ServiceBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceBase", function() { return ServiceBase; });
/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Ui */ "./ClientApp/Ui.ts");
/* harmony import */ var _Models_Result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Models/Result */ "./ClientApp/models/Result.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var json_to_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json-to-url */ "./node_modules/json-to-url/index.js");
/* harmony import */ var json_to_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json_to_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Globals */ "./ClientApp/Globals.ts");
var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};/**
 * Represents base class of the isomorphic service.
 */var ServiceBase=/** @class */function(){function ServiceBase(){}/**
     * Make request with JSON data.
     * @param opts
     */ServiceBase.requestJson=function(opts){return __awaiter(this,void 0,Promise,function(){var axiosResult,result,processQuery,axiosRequestConfig,_a,error_1;return __generator(this,function(_b){switch(_b.label){case 0:axiosResult=null;result=null;opts.url=Object(domain_wait__WEBPACK_IMPORTED_MODULE_3__["transformUrl"])(opts.url);// Allow requests also for Node.
processQuery=function(url,data){if(data){return url+"?"+json_to_url__WEBPACK_IMPORTED_MODULE_4___default()(data);}return url;};if(Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["isNode"])()){// Used for SSR requests from the web server to NodeServices.
axiosRequestConfig={headers:{Cookie:_Globals__WEBPACK_IMPORTED_MODULE_6__["default"].getData().private.cookie}};}_b.label=1;case 1:_b.trys.push([1,13,,14]);_a=opts.method;switch(_a){case"GET":return[3/*break*/,2];case"POST":return[3/*break*/,4];case"PUT":return[3/*break*/,6];case"PATCH":return[3/*break*/,8];case"DELETE":return[3/*break*/,10];}return[3/*break*/,12];case 2:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(processQuery(opts.url,opts.data),axiosRequestConfig)];case 3:axiosResult=_b.sent();return[3/*break*/,12];case 4:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(opts.url,opts.data,axiosRequestConfig)];case 5:axiosResult=_b.sent();return[3/*break*/,12];case 6:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(opts.url,opts.data,axiosRequestConfig)];case 7:axiosResult=_b.sent();return[3/*break*/,12];case 8:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(opts.url,opts.data,axiosRequestConfig)];case 9:axiosResult=_b.sent();return[3/*break*/,12];case 10:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(processQuery(opts.url,opts.data),axiosRequestConfig)];case 11:axiosResult=_b.sent();return[3/*break*/,12];case 12:result=new(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"].bind.apply(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"],[void 0,axiosResult.data.value].concat(axiosResult.data.errors)))();return[3/*break*/,14];case 13:error_1=_b.sent();result=new _Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"](null,error_1.message);return[3/*break*/,14];case 14:if(result.hasErrors){_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"].showErrors.apply(_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"],result.errors);}return[2/*return*/,result];}});});};/**
     * Allows you to send files to the server.
     * @param opts
     */ServiceBase.sendFormData=function(opts){return __awaiter(this,void 0,Promise,function(){var axiosResult,result,axiosOpts,_a,error_2;return __generator(this,function(_b){switch(_b.label){case 0:axiosResult=null;result=null;opts.url=Object(domain_wait__WEBPACK_IMPORTED_MODULE_3__["transformUrl"])(opts.url);// Allow requests also for Node.
axiosOpts={headers:{'Content-Type':'multipart/form-data'}};_b.label=1;case 1:_b.trys.push([1,9,,10]);_a=opts.method;switch(_a){case"POST":return[3/*break*/,2];case"PUT":return[3/*break*/,4];case"PATCH":return[3/*break*/,6];}return[3/*break*/,8];case 2:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(opts.url,opts.data,axiosOpts)];case 3:axiosResult=_b.sent();return[3/*break*/,8];case 4:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(opts.url,opts.data,axiosOpts)];case 5:axiosResult=_b.sent();return[3/*break*/,8];case 6:return[4/*yield*/,axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(opts.url,opts.data,axiosOpts)];case 7:axiosResult=_b.sent();return[3/*break*/,8];case 8:result=new(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"].bind.apply(_Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"],[void 0,axiosResult.data.value].concat(axiosResult.data.errors)))();return[3/*break*/,10];case 9:error_2=_b.sent();result=new _Models_Result__WEBPACK_IMPORTED_MODULE_1__["default"](null,error_2.message);return[3/*break*/,10];case 10:if(result.hasErrors){_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"].showErrors.apply(_Ui__WEBPACK_IMPORTED_MODULE_0__["Ui"],result.errors);}return[2/*return*/,result];}});});};return ServiceBase;}();

/***/ }),

/***/ "./ClientApp/store/LoginStore.ts":
/*!***************************************!*\
  !*** ./ClientApp/store/LoginStore.ts ***!
  \***************************************/
/*! exports provided: LoginStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginStore", function() { return LoginStore; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Services_AccountService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/AccountService */ "./ClientApp/services/AccountService.ts");
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var LoginStore;(function(LoginStore){var _this=this;var Actions;(function(Actions){/**
         * You need to have the initial state to
         * reset the indicators (e.g. loginSuccess)
         * that call redirect or any other actions.
         * It must be called in method 'componentDidMount'
         * of a component.
         */Actions["Init"]="LOGIN_INIT";Actions["Request"]="LOGIN_REQUEST";Actions["Success"]="LOGIN_SUCCESS";Actions["Failure"]="LOGIN_FAILURE";})(Actions=LoginStore.Actions||(LoginStore.Actions={}));LoginStore.actionCreators={init:function(){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){return __generator(this,function(_a){dispatch({type:Actions.Init});return[2/*return*/];});});};},loginRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.Request});return[4/*yield*/,_Services_AccountService__WEBPACK_IMPORTED_MODULE_1__["default"].login(model)];case 1:result=_a.sent();if(result.hasErrors){dispatch({type:Actions.Failure});return[2/*return*/];}dispatch({type:Actions.Success,payload:result.value});return[2/*return*/];}});});};}};var initialState={indicators:{operationLoading:false,loginSuccess:false}};LoginStore.reducer=function(currentState,incomingAction){var action=incomingAction;var cloneIndicators=function(){return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.indicators);};switch(action.type){case Actions.Init:return initialState;case Actions.Request:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.Success:var indicators=cloneIndicators();indicators.operationLoading=false;indicators.loginSuccess=true;return __assign({},currentState,{indicators:indicators});case Actions.Failure:var indicators=cloneIndicators();indicators.operationLoading=false;return __assign({},currentState,{indicators:indicators});default:// The following line guarantees that every action in the KnownAction union has been covered by a case above
var exhaustiveCheck=action;}return currentState||initialState;};})(LoginStore||(LoginStore={}));

/***/ }),

/***/ "./ClientApp/store/PersonStore.ts":
/*!****************************************!*\
  !*** ./ClientApp/store/PersonStore.ts ***!
  \****************************************/
/*! exports provided: PersonStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonStore", function() { return PersonStore; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Utils */ "./ClientApp/utils.ts");
/* harmony import */ var _Services_PersonService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/PersonService */ "./ClientApp/services/PersonService.ts");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! domain-wait */ "./node_modules/domain-wait/dist/cjs/index.js");
/* harmony import */ var domain_wait__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(domain_wait__WEBPACK_IMPORTED_MODULE_2__);
var __assign=undefined&&undefined.__assign||function(){__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}return t;};return __assign.apply(this,arguments);};var __awaiter=undefined&&undefined.__awaiter||function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value));}catch(e){reject(e);}}function rejected(value){try{step(generator["throw"](value));}catch(e){reject(e);}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value);}).then(fulfilled,rejected);}step((generator=generator.apply(thisArg,_arguments||[])).next());});};var __generator=undefined&&undefined.__generator||function(thisArg,body){var _={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1];},trys:[],ops:[]},f,y,t,g;return g={next:verb(0),"throw":verb(1),"return":verb(2)},typeof Symbol==="function"&&(g[Symbol.iterator]=function(){return this;}),g;function verb(n){return function(v){return step([n,v]);};}function step(op){if(f)throw new TypeError("Generator is already executing.");while(_)try{if(f=1,y&&(t=op[0]&2?y["return"]:op[0]?y["throw"]||((t=y["return"])&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;if(y=0,t)op=[op[0]&2,t.value];switch(op[0]){case 0:case 1:t=op;break;case 4:_.label++;return{value:op[1],done:false};case 5:_.label++;y=op[1];op=[0];continue;case 7:op=_.ops.pop();_.trys.pop();continue;default:if(!(t=_.trys,t=t.length>0&&t[t.length-1])&&(op[0]===6||op[0]===2)){_=0;continue;}if(op[0]===3&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break;}if(op[0]===6&&_.label<t[1]){_.label=t[1];t=op;break;}if(t&&_.label<t[2]){_.label=t[2];_.ops.push(op);break;}if(t[2])_.ops.pop();_.trys.pop();continue;}op=body.call(thisArg,_);}catch(e){op=[6,e];y=0;}finally{f=t=0;}if(op[0]&5)throw op[1];return{value:op[0]?op[1]:void 0,done:true};}};var PersonStore;(function(PersonStore){var _this=this;var Actions;(function(Actions){Actions["SearchRequest"]="PERSON_SEARCH_REQUEST";Actions["SearchResponse"]="PERSON_SEARCH_RESPONSE";Actions["AddRequest"]="PERSON_ADD_REQUEST";Actions["AddResponse"]="PERSON_ADD_RESPONSE";Actions["UpdateRequest"]="PERSON_UPDATE_REQUEST";Actions["UpdateResponse"]="PERSON_UPDATE_RESPONSE";Actions["DeleteRequest"]="PERSON_DELETE_REQUEST";Actions["DeleteResponse"]="PERSON_DELETE_RESPONSE";})(Actions=PersonStore.Actions||(PersonStore.Actions={}));PersonStore.actionCreators={searchRequest:function(term){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var _this=this;return __generator(this,function(_a){switch(_a.label){case 0:return[4/*yield*/,Object(domain_wait__WEBPACK_IMPORTED_MODULE_2__["wait"])(function(transformUrl){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:// Wait for server prerendering.
dispatch({type:Actions.SearchRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].search(term)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.SearchResponse,payload:result.value});}return[2/*return*/];}});});})];case 1:_a.sent();return[2/*return*/];}});});};},addRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.AddRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].add(model)];case 1:result=_a.sent();if(!result.hasErrors){model.id=result.value;dispatch({type:Actions.AddResponse,payload:model});}return[2/*return*/];}});});};},updateRequest:function(model){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.UpdateRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].update(model)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.UpdateResponse,payload:model});}return[2/*return*/];}});});};},deleteRequest:function(id){return function(dispatch,getState){return __awaiter(_this,void 0,void 0,function(){var result;return __generator(this,function(_a){switch(_a.label){case 0:dispatch({type:Actions.DeleteRequest});return[4/*yield*/,_Services_PersonService__WEBPACK_IMPORTED_MODULE_1__["default"].delete(id)];case 1:result=_a.sent();if(!result.hasErrors){dispatch({type:Actions.DeleteResponse,id:id});}return[2/*return*/];}});});};}};var initialState={people:[],indicators:{operationLoading:false}};PersonStore.reducer=function(currentState,incomingAction){var action=incomingAction;var cloneIndicators=function(){return Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.indicators);};switch(action.type){case Actions.SearchRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.SearchResponse:var indicators=cloneIndicators();indicators.operationLoading=false;return __assign({},currentState,{indicators:indicators,people:action.payload});case Actions.UpdateRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.UpdateResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people);var itemToUpdate=data.filter(function(x){return x.id===action.payload.id;})[0];itemToUpdate.firstName=action.payload.firstName;itemToUpdate.lastName=action.payload.lastName;return __assign({},currentState,{indicators:indicators,people:data});case Actions.AddRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.AddResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people);data.push(action.payload);return __assign({},currentState,{indicators:indicators,people:data});case Actions.DeleteRequest:var indicators=cloneIndicators();indicators.operationLoading=true;return __assign({},currentState,{indicators:indicators});case Actions.DeleteResponse:var indicators=cloneIndicators();indicators.operationLoading=false;var data=Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["clone"])(currentState.people).filter(function(x){return x.id!==action.id;});return __assign({},currentState,{indicators:indicators,people:data});default:// The following line guarantees that every action in the KnownAction union has been covered by a case above
var exhaustiveCheck=action;}return currentState||initialState;};})(PersonStore||(PersonStore={}));

/***/ }),

/***/ "./ClientApp/store/index.ts":
/*!**********************************!*\
  !*** ./ClientApp/store/index.ts ***!
  \**********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _Store_LoginStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Store/LoginStore */ "./ClientApp/store/LoginStore.ts");
/* harmony import */ var _Store_PersonStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Store/PersonStore */ "./ClientApp/store/PersonStore.ts");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
var reducers={login:_Store_LoginStore__WEBPACK_IMPORTED_MODULE_0__["LoginStore"].reducer,person:_Store_PersonStore__WEBPACK_IMPORTED_MODULE_1__["PersonStore"].reducer};

/***/ }),

/***/ "./ClientApp/styles/authorizedLayout.scss":
/*!************************************************!*\
  !*** ./ClientApp/styles/authorizedLayout.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/guestLayout.scss":
/*!*******************************************!*\
  !*** ./ClientApp/styles/guestLayout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/loader.scss":
/*!**************************************!*\
  !*** ./ClientApp/styles/loader.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/styles/main.scss":
/*!************************************!*\
  !*** ./ClientApp/styles/main.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./ClientApp/utils.ts":
/*!****************************!*\
  !*** ./ClientApp/utils.ts ***!
  \****************************/
/*! exports provided: clone, getPromiseFromAction, isNode, isObjectEmpty, emptyForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromiseFromAction", function() { return getPromiseFromAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return isNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyForm", function() { return emptyForm; });
function clone(object){return JSON.parse(JSON.stringify(object));}function getPromiseFromAction(asyncActionCreator){return asyncActionCreator;}/**
 * Is server prerendering by Node.js.
 * There can't be any DOM: window, document, etc.
 */function isNode(){return typeof process==='object'&&process.versions&&!!process.versions.node;}function isObjectEmpty(obj){for(var key in obj){if(obj.hasOwnProperty(key))return false;}return true;}function emptyForm(form){var inputs=Array.from(form.querySelectorAll("input, select, textarea"));inputs.forEach(function(x){var inputType=x.getAttribute("type");if(inputType==="checkbox"||inputType==="radio"){x.checked=false;}else{x.value="";}});}

/***/ }),

/***/ "./node_modules/aspnet-prerendering/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/aspnet-prerendering/index.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(476);

/***/ }),

/***/ "./node_modules/awesome-debounce-promise/awesome-debounce-promise.js":
/*!***************************************************************************!*\
  !*** ./node_modules/awesome-debounce-promise/awesome-debounce-promise.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DebounceCache = exports.onlyResolvesLast = exports.debounce = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _debouncePromise = __webpack_require__(/*! debounce-promise */ "./node_modules/debounce-promise/dist/index.js");

var _debouncePromise2 = _interopRequireDefault(_debouncePromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// We use DebouncePromise as a dependency as it does a great low-level job
// The behavior of the lib is to return the same promise for all function calls
var debounce = exports.debounce = function debounce(func, wait, options) {
  return (0, _debouncePromise2.default)(func, wait, options);
};

// Given a function returning promises, wrap it so that only the promise returned from last call will actually resolve
// This is useful to ignore former async results and handle concurrency issues
var onlyResolvesLast = exports.onlyResolvesLast = function onlyResolvesLast(asyncFunction) {
  // Inspired from https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
  var makeCancelable = function makeCancelable(promise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
      promise.then(function (val) {
        return hasCanceled_ ? undefined : resolve(val);
      }, function (error) {
        return hasCanceled_ ? undefined : reject(error);
      });
    });
    return {
      promise: wrappedPromise,
      cancel: function cancel() {
        hasCanceled_ = true;
      }
    };
  };

  var cancelPrevious = void 0;
  return function () {
    cancelPrevious && cancelPrevious();

    var _makeCancelable = makeCancelable(asyncFunction.apply(undefined, arguments)),
        promise = _makeCancelable.promise,
        cancel = _makeCancelable.cancel;

    cancelPrevious = cancel;
    return promise;
  };
};

// We create a debouncing function cache, because when wrapping the original function,
// we may actually want to route the function call to different debounced functions depending function paameters

var DebounceCache = exports.DebounceCache = function DebounceCache() {
  var _this = this;

  _classCallCheck(this, DebounceCache);

  this.getDebouncedFunction = function (func, wait, options, args) {
    var keyOptions = options.key,
        onlyResolvesLastOption = options.onlyResolvesLast,
        otherOptions = _objectWithoutProperties(options, ['key', 'onlyResolvesLast']);

    var key = keyOptions.apply(undefined, _toConsumableArray(args));
    // If the debounced function does not exist for this key, we create one on the fly and return it
    if (!_this.debounceCache[key]) {
      var debouncedFunc = debounce(func, wait, otherOptions);
      if (onlyResolvesLastOption) {
        debouncedFunc = onlyResolvesLast(debouncedFunc);
      }
      _this.debounceCache[key] = debouncedFunc;
    }
    return _this.debounceCache[key];
  };

  this.debounceCache = {};
};

var DefaultOptions = {
  // By default, the key is null, which means that all the function calls
  // will share the same debounced function
  // Providing a key function permit to use the call arguments
  // and route to a distinct debounced function
  key: function key() {
    return null;
  },

  // By default, a debounced function will only resolve
  // the last promise it returned
  // Former calls will stay unresolved, so that you don't have
  // to handle concurrency issues in your code
  onlyResolvesLast: true
};

function AwesomeDebouncePromise(func, wait, options) {
  var finalOptions = _extends({}, DefaultOptions, options);
  var debounceCache = new DebounceCache();
  return function AwesomeDebouncePromiseWrapper() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var debouncedFn = debounceCache.getDebouncedFunction(func, wait, finalOptions, args);
    return debouncedFn.apply(undefined, args);
  };
}

exports.default = AwesomeDebouncePromise;


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/axios/index.js from dll-reference ./vendor ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(195);

/***/ }),

/***/ "./node_modules/bind-decorator/index.js":
/*!**********************************************!*\
  !*** ./node_modules/bind-decorator/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants;
(function (constants) {
    constants.typeOfFunction = 'function';
    constants.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || (typeof descriptor.value !== constants.typeOfFunction)) {
        throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    }
    return {
        configurable: constants.boolTrue,
        get: function () {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;


/***/ }),

/***/ "./node_modules/bootstrap3-native/index.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/bootstrap3-native/index.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(251);

/***/ }),

/***/ "./node_modules/connected-react-router/lib/index.js":
/*!************************************************************************************************!*\
  !*** delegated ./node_modules/connected-react-router/lib/index.js from dll-reference ./vendor ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(262);

/***/ }),

/***/ "./node_modules/create-react-context/lib/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/create-react-context/lib/implementation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "./node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/create-react-context/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/create-react-context/lib/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "./node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/debounce-promise/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/debounce-promise/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global setTimeout, clearTimeout */

module.exports = function debounce(fn) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var lastCallAt = void 0;
  var deferred = void 0;
  var timer = void 0;
  var pendingArgs = [];
  return function debounced() {
    var currentWait = getWait(wait);
    var currentTime = new Date().getTime();

    var isCold = !lastCallAt || currentTime - lastCallAt > currentWait;

    lastCallAt = currentTime;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isCold && options.leading) {
      return options.accumulate ? Promise.resolve(fn.call(this, [args])).then(function (result) {
        return result[0];
      }) : Promise.resolve(fn.call.apply(fn, [this].concat(args)));
    }

    if (deferred) {
      clearTimeout(timer);
    } else {
      deferred = defer();
    }

    pendingArgs.push(args);
    timer = setTimeout(flush.bind(this), currentWait);

    if (options.accumulate) {
      var _ret = function () {
        var argsIndex = pendingArgs.length - 1;
        return {
          v: deferred.promise.then(function (results) {
            return results[argsIndex];
          })
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }

    return deferred.promise;
  };

  function flush() {
    var thisDeferred = deferred;
    clearTimeout(timer);

    Promise.resolve(options.accumulate ? fn.call(this, pendingArgs) : fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(thisDeferred.resolve, thisDeferred.reject);

    pendingArgs = [];
    deferred = null;
  }
};

function getWait(wait) {
  return typeof wait === 'function' ? wait() : wait;
}

function defer() {
  var deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/deepmerge/dist/umd.js":
/*!********************************************!*\
  !*** ./node_modules/deepmerge/dist/umd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

return deepmerge_1;

})));


/***/ }),

/***/ "./node_modules/domain-wait/dist/cjs/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/domain-wait/dist/cjs/index.js from dll-reference ./vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(187);

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "./node_modules/formik/dist/formik.cjs.development.js":
/*!************************************************************!*\
  !*** ./node_modules/formik/dist/formik.cjs.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var hoistNonReactStatics = _interopDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/formik/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));
var createContext = _interopDefault(__webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js"));
var cloneDeep = _interopDefault(__webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js"));
var toPath = _interopDefault(__webpack_require__(/*! lodash.topath */ "./node_modules/lodash.topath/index.js"));
var isEqual = _interopDefault(__webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js"));
var warning = _interopDefault(__webpack_require__(/*! warning */ "./node_modules/warning/warning.js"));
var deepmerge = _interopDefault(__webpack_require__(/*! deepmerge */ "./node_modules/deepmerge/dist/umd.js"));

var _a;
var FormikProvider = (_a = createContext({}), _a.Provider), FormikConsumer = _a.Consumer;
function connect(Comp) {
    var C = function (props) { return (React.createElement(FormikConsumer, null, function (formik) { return React.createElement(Comp, tslib_1.__assign({}, props, { formik: formik })); })); };
    C.WrappedComponent = Comp;
    return hoistNonReactStatics(C, Comp);
}

function getIn(obj, key, def, p) {
    if (p === void 0) { p = 0; }
    var path = toPath(key);
    while (obj && p < path.length) {
        obj = obj[path[p++]];
    }
    return obj === undefined ? def : obj;
}
function setIn(obj, path, value) {
    var res = {};
    var resVal = res;
    var i = 0;
    var pathArray = toPath(path);
    for (; i < pathArray.length - 1; i++) {
        var currentPath = pathArray[i];
        var currentObj = getIn(obj, pathArray.slice(0, i + 1));
        if (resVal[currentPath]) {
            resVal = resVal[currentPath];
        }
        else if (currentObj) {
            resVal = resVal[currentPath] = cloneDeep(currentObj);
        }
        else {
            var nextPath = pathArray[i + 1];
            resVal = resVal[currentPath] =
                isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
        }
    }
    if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
        return obj;
    }
    if (value === undefined) {
        delete resVal[pathArray[i]];
    }
    else {
        resVal[pathArray[i]] = value;
    }
    var result = tslib_1.__assign({}, obj, res);
    if (i === 0 && value === undefined) {
        delete result[pathArray[i]];
    }
    return result;
}
function setNestedObjectValues(object, value, visited, response) {
    if (visited === void 0) { visited = new WeakMap(); }
    if (response === void 0) { response = {}; }
    for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
        var k = _a[_i];
        var val = object[k];
        if (isObject(val)) {
            if (!visited.get(val)) {
                visited.set(val, true);
                response[k] = Array.isArray(val) ? [] : {};
                setNestedObjectValues(val, value, visited, response[k]);
            }
        }
        else {
            response[k] = value;
        }
    }
    return response;
}
var isFunction = function (obj) {
    return typeof obj === 'function';
};
var isObject = function (obj) {
    return obj !== null && typeof obj === 'object';
};
var isInteger = function (obj) {
    return String(Math.floor(Number(obj))) === obj;
};
var isString = function (obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
};
var isNaN = function (obj) { return obj !== obj; };
var isEmptyChildren = function (children) {
    return React.Children.count(children) === 0;
};
var isPromise = function (value) {
    return isObject(value) && isFunction(value.then);
};
function getActiveElement(doc) {
    doc = doc || (typeof document !== 'undefined' ? document : undefined);
    if (typeof doc === 'undefined') {
        return null;
    }
    try {
        return doc.activeElement || doc.body;
    }
    catch (e) {
        return doc.body;
    }
}

var Formik = (function (_super) {
    tslib_1.__extends(Formik, _super);
    function Formik(props) {
        var _this = _super.call(this, props) || this;
        _this.hcCache = {};
        _this.hbCache = {};
        _this.registerField = function (name, Comp) {
            _this.fields[name] = Comp;
        };
        _this.unregisterField = function (name) {
            delete _this.fields[name];
        };
        _this.setErrors = function (errors) {
            _this.setState({ errors: errors });
        };
        _this.setTouched = function (touched) {
            _this.setState({ touched: touched }, function () {
                if (_this.props.validateOnBlur) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.setValues = function (values) {
            _this.setState({ values: values }, function () {
                if (_this.props.validateOnChange) {
                    _this.runValidations(values);
                }
            });
        };
        _this.setStatus = function (status) {
            _this.setState({ status: status });
        };
        _this.setError = function (error) {
            {
                console.warn("Warning: Formik's setError(error) is deprecated and may be removed in future releases. Please use Formik's setStatus(status) instead. It works identically. For more info see https://github.com/jaredpalmer/formik#setstatus-status-any--void");
            }
            _this.setState({ error: error });
        };
        _this.setSubmitting = function (isSubmitting) {
            if (_this.didMount) {
                _this.setState({ isSubmitting: isSubmitting });
            }
        };
        _this.validateField = function (field) {
            _this.setState({ isValidating: true });
            _this.runSingleFieldLevelValidation(field, getIn(_this.state.values, field)).then(function (error) {
                if (_this.didMount) {
                    _this.setState({
                        errors: setIn(_this.state.errors, field, error),
                        isValidating: false,
                    });
                }
            });
        };
        _this.runSingleFieldLevelValidation = function (field, value) {
            return new Promise(function (resolve) {
                return resolve(_this.fields[field].props.validate(value));
            }).then(function (x) { return x; }, function (e) { return e; });
        };
        _this.runValidationSchema = function (values) {
            return new Promise(function (resolve) {
                var validationSchema = _this.props.validationSchema;
                var schema = isFunction(validationSchema)
                    ? validationSchema()
                    : validationSchema;
                validateYupSchema(values, schema).then(function () {
                    resolve({});
                }, function (err) {
                    resolve(yupToFormErrors(err));
                });
            });
        };
        _this.runValidations = function (values) {
            if (values === void 0) { values = _this.state.values; }
            _this.setState({ isValidating: true });
            return Promise.all([
                _this.runFieldLevelValidations(values),
                _this.props.validationSchema ? _this.runValidationSchema(values) : {},
                _this.props.validate ? _this.runValidateHandler(values) : {},
            ]).then(function (_a) {
                var fieldErrors = _a[0], schemaErrors = _a[1], handlerErrors = _a[2];
                var combinedErrors = deepmerge.all([fieldErrors, schemaErrors, handlerErrors], { arrayMerge: arrayMerge });
                if (_this.didMount) {
                    _this.setState({ isValidating: false, errors: combinedErrors });
                }
                return combinedErrors;
            });
        };
        _this.handleChange = function (eventOrPath) {
            var executeChange = function (eventOrTextValue, maybePath) {
                var field = maybePath;
                var val = eventOrTextValue;
                var parsed;
                if (!isString(eventOrTextValue)) {
                    if (eventOrTextValue.persist) {
                        eventOrTextValue.persist();
                    }
                    var _a = eventOrTextValue.target, type = _a.type, name_1 = _a.name, id = _a.id, value = _a.value, checked = _a.checked, outerHTML = _a.outerHTML;
                    field = maybePath ? maybePath : name_1 ? name_1 : id;
                    if (!field && "development" !== 'production') {
                        warnAboutMissingIdentifier({
                            htmlContent: outerHTML,
                            documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
                            handlerName: 'handleChange',
                        });
                    }
                    val = /number|range/.test(type)
                        ? ((parsed = parseFloat(value)), isNaN(parsed) ? '' : parsed)
                        : /checkbox/.test(type) ? checked : value;
                }
                if (field) {
                    _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, field, val) })); }, function () {
                        if (_this.props.validateOnChange) {
                            _this.runValidations(setIn(_this.state.values, field, val));
                        }
                    });
                }
            };
            if (isString(eventOrPath)) {
                return isFunction(_this.hcCache[eventOrPath])
                    ? _this.hcCache[eventOrPath]
                    : (_this.hcCache[eventOrPath] = function (event) {
                        return executeChange(event, eventOrPath);
                    });
            }
            else {
                executeChange(eventOrPath);
            }
        };
        _this.setFieldValue = function (field, value, shouldValidate) {
            if (shouldValidate === void 0) { shouldValidate = true; }
            if (_this.didMount) {
                _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, field, value) })); }, function () {
                    if (_this.props.validateOnChange && shouldValidate) {
                        _this.runValidations(_this.state.values);
                    }
                });
            }
        };
        _this.handleSubmit = function (e) {
            if (e && e.preventDefault) {
                e.preventDefault();
            }
            if (typeof document !== 'undefined') {
                var activeElement = getActiveElement();
                if (activeElement !== null &&
                    activeElement instanceof HTMLButtonElement) {
                    warning(!!(activeElement.attributes &&
                        activeElement.attributes.getNamedItem('type')), 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.');
                }
            }
            _this.submitForm();
        };
        _this.submitForm = function () {
            _this.setState(function (prevState) { return ({
                touched: setNestedObjectValues(prevState.values, true),
                isSubmitting: true,
                submitCount: prevState.submitCount + 1,
            }); });
            return _this.runValidations().then(function (combinedErrors) {
                var isValid = Object.keys(combinedErrors).length === 0;
                if (isValid) {
                    _this.executeSubmit();
                }
                else if (_this.didMount) {
                    _this.setState({ isSubmitting: false });
                }
            });
        };
        _this.executeSubmit = function () {
            _this.props.onSubmit(_this.state.values, _this.getFormikActions());
        };
        _this.handleBlur = function (eventOrString) {
            var executeBlur = function (e, path) {
                if (e.persist) {
                    e.persist();
                }
                var _a = e.target, name = _a.name, id = _a.id, outerHTML = _a.outerHTML;
                var field = path ? path : name ? name : id;
                if (!field && "development" !== 'production') {
                    warnAboutMissingIdentifier({
                        htmlContent: outerHTML,
                        documentationAnchorLink: 'handleblur-e-any--void',
                        handlerName: 'handleBlur',
                    });
                }
                _this.setState(function (prevState) { return ({
                    touched: setIn(prevState.touched, field, true),
                }); });
                if (_this.props.validateOnBlur) {
                    _this.runValidations(_this.state.values);
                }
            };
            if (isString(eventOrString)) {
                return isFunction(_this.hbCache[eventOrString])
                    ? _this.hbCache[eventOrString]
                    : (_this.hbCache[eventOrString] = function (event) {
                        return executeBlur(event, eventOrString);
                    });
            }
            else {
                executeBlur(eventOrString);
            }
        };
        _this.setFieldTouched = function (field, touched, shouldValidate) {
            if (touched === void 0) { touched = true; }
            if (shouldValidate === void 0) { shouldValidate = true; }
            _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { touched: setIn(prevState.touched, field, touched) })); }, function () {
                if (_this.props.validateOnBlur && shouldValidate) {
                    _this.runValidations(_this.state.values);
                }
            });
        };
        _this.setFieldError = function (field, message) {
            _this.setState(function (prevState) { return (tslib_1.__assign({}, prevState, { errors: setIn(prevState.errors, field, message) })); });
        };
        _this.resetForm = function (nextValues) {
            var values = nextValues ? nextValues : _this.props.initialValues;
            _this.initialValues = values;
            _this.setState({
                isSubmitting: false,
                isValidating: false,
                errors: {},
                touched: {},
                error: undefined,
                status: undefined,
                values: values,
                submitCount: 0,
            });
        };
        _this.handleReset = function () {
            if (_this.props.onReset) {
                var maybePromisedOnReset = _this.props.onReset(_this.state.values, _this.getFormikActions());
                if (isPromise(maybePromisedOnReset)) {
                    maybePromisedOnReset.then(_this.resetForm);
                }
                else {
                    _this.resetForm();
                }
            }
            else {
                _this.resetForm();
            }
        };
        _this.setFormikState = function (s, callback) {
            return _this.setState(s, callback);
        };
        _this.getFormikActions = function () {
            return {
                resetForm: _this.resetForm,
                submitForm: _this.submitForm,
                validateForm: _this.runValidations,
                validateField: _this.validateField,
                setError: _this.setError,
                setErrors: _this.setErrors,
                setFieldError: _this.setFieldError,
                setFieldTouched: _this.setFieldTouched,
                setFieldValue: _this.setFieldValue,
                setStatus: _this.setStatus,
                setSubmitting: _this.setSubmitting,
                setTouched: _this.setTouched,
                setValues: _this.setValues,
                setFormikState: _this.setFormikState,
            };
        };
        _this.getFormikComputedProps = function () {
            var isInitialValid = _this.props.isInitialValid;
            var dirty = !isEqual(_this.initialValues, _this.state.values);
            return {
                dirty: dirty,
                isValid: dirty
                    ? _this.state.errors && Object.keys(_this.state.errors).length === 0
                    : isInitialValid !== false && isFunction(isInitialValid)
                        ? isInitialValid(_this.props)
                        : isInitialValid,
                initialValues: _this.initialValues,
            };
        };
        _this.getFormikBag = function () {
            return tslib_1.__assign({}, _this.state, _this.getFormikActions(), _this.getFormikComputedProps(), { registerField: _this.registerField, unregisterField: _this.unregisterField, handleBlur: _this.handleBlur, handleChange: _this.handleChange, handleReset: _this.handleReset, handleSubmit: _this.handleSubmit, validateOnChange: _this.props.validateOnChange, validateOnBlur: _this.props.validateOnBlur });
        };
        _this.getFormikContext = function () {
            return tslib_1.__assign({}, _this.getFormikBag(), { validationSchema: _this.props.validationSchema, validate: _this.props.validate, initialValues: _this.initialValues });
        };
        _this.state = {
            values: props.initialValues || {},
            errors: {},
            touched: {},
            isSubmitting: false,
            isValidating: false,
            submitCount: 0,
        };
        _this.didMount = false;
        _this.fields = {};
        _this.initialValues = props.initialValues || {};
        warning(!(props.component && props.render), 'You should not use <Formik component> and <Formik render> in the same <Formik> component; <Formik render> will be ignored');
        warning(!(props.component && props.children && !isEmptyChildren(props.children)), 'You should not use <Formik component> and <Formik children> in the same <Formik> component; <Formik children> will be ignored');
        warning(!(props.render && props.children && !isEmptyChildren(props.children)), 'You should not use <Formik render> and <Formik children> in the same <Formik> component; <Formik children> will be ignored');
        return _this;
    }
    Formik.prototype.componentDidMount = function () {
        this.didMount = true;
    };
    Formik.prototype.componentWillUnmount = function () {
        this.didMount = false;
    };
    Formik.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.enableReinitialize &&
            !isEqual(prevProps.initialValues, this.props.initialValues)) {
            this.initialValues = this.props.initialValues;
            this.resetForm(this.props.initialValues);
        }
    };
    Formik.prototype.runFieldLevelValidations = function (values) {
        var _this = this;
        var fieldKeysWithValidation = Object.keys(this.fields).filter(function (f) {
            return _this.fields &&
                _this.fields[f] &&
                _this.fields[f].props.validate &&
                isFunction(_this.fields[f].props.validate);
        });
        var fieldValidations = fieldKeysWithValidation.length > 0
            ? fieldKeysWithValidation.map(function (f) {
                return _this.runSingleFieldLevelValidation(f, getIn(values, f));
            })
            : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')];
        return Promise.all(fieldValidations).then(function (fieldErrorsList) {
            return fieldErrorsList.reduce(function (prev, curr, index) {
                if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
                    return prev;
                }
                if (!!curr) {
                    prev = setIn(prev, fieldKeysWithValidation[index], curr);
                }
                return prev;
            }, {});
        });
    };
    Formik.prototype.runValidateHandler = function (values) {
        var _this = this;
        return new Promise(function (resolve) {
            var maybePromisedErrors = _this.props.validate(values);
            if (maybePromisedErrors === undefined) {
                resolve({});
            }
            else if (isPromise(maybePromisedErrors)) {
                maybePromisedErrors.then(function () {
                    resolve({});
                }, function (errors) {
                    resolve(errors);
                });
            }
            else {
                resolve(maybePromisedErrors);
            }
        });
    };
    Formik.prototype.render = function () {
        var _a = this.props, component = _a.component, render = _a.render, children = _a.children;
        var props = this.getFormikBag();
        var ctx = this.getFormikContext();
        return (React.createElement(FormikProvider, { value: ctx }, component
            ? React.createElement(component, props)
            : render
                ? render(props)
                : children
                    ? isFunction(children)
                        ? children(props)
                        : !isEmptyChildren(children)
                            ? React.Children.only(children)
                            : null
                    : null));
    };
    Formik.defaultProps = {
        validateOnChange: true,
        validateOnBlur: true,
        isInitialValid: false,
        enableReinitialize: false,
    };
    return Formik;
}(React.Component));
function warnAboutMissingIdentifier(_a) {
    var htmlContent = _a.htmlContent, documentationAnchorLink = _a.documentationAnchorLink, handlerName = _a.handlerName;
    console.error("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n\n    " + htmlContent + "\n\n    Formik cannot determine which value to update. For more info see https://github.com/jaredpalmer/formik#" + documentationAnchorLink + "\n  ");
}
function yupToFormErrors(yupError) {
    var errors = {};
    if (yupError.inner.length === 0) {
        return setIn(errors, yupError.path, yupError.message);
    }
    for (var _i = 0, _a = yupError.inner; _i < _a.length; _i++) {
        var err = _a[_i];
        if (!errors[err.path]) {
            errors = setIn(errors, err.path, err.message);
        }
    }
    return errors;
}
function validateYupSchema(values, schema, sync, context) {
    if (sync === void 0) { sync = false; }
    if (context === void 0) { context = {}; }
    var validateData = {};
    for (var k in values) {
        if (values.hasOwnProperty(k)) {
            var key = String(k);
            validateData[key] = values[key] !== '' ? values[key] : undefined;
        }
    }
    return schema[sync ? 'validateSync' : 'validate'](validateData, {
        abortEarly: false,
        context: context,
    });
}
function arrayMerge(target, source, options) {
    var destination = target.slice();
    source.forEach(function (e, i) {
        if (typeof destination[i] === 'undefined') {
            var cloneRequested = options.clone !== false;
            var shouldClone = cloneRequested && options.isMergeableObject(e);
            destination[i] = shouldClone
                ? deepmerge(Array.isArray(e) ? [] : {}, e, options)
                : e;
        }
        else if (options.isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, options);
        }
        else if (target.indexOf(e) === -1) {
            destination.push(e);
        }
    });
    return destination;
}

var FieldInner = (function (_super) {
    tslib_1.__extends(FieldInner, _super);
    function FieldInner(props) {
        var _this = _super.call(this, props) || this;
        var render = props.render, children = props.children, component = props.component;
        warning(!(component && render), 'You should not use <Field component> and <Field render> in the same <Field> component; <Field component> will be ignored');
        warning(!(component && children && isFunction(children)), 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.');
        warning(!(render && children && !isEmptyChildren(children)), 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored');
        return _this;
    }
    FieldInner.prototype.componentDidMount = function () {
        this.props.formik.registerField(this.props.name, this);
    };
    FieldInner.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.name !== prevProps.name) {
            this.props.formik.unregisterField(prevProps.name);
            this.props.formik.registerField(this.props.name, this);
        }
        if (this.props.validate !== prevProps.validate) {
            this.props.formik.registerField(this.props.name, this);
        }
    };
    FieldInner.prototype.componentWillUnmount = function () {
        this.props.formik.unregisterField(this.props.name);
    };
    FieldInner.prototype.render = function () {
        var _a = this.props, validate = _a.validate, name = _a.name, render = _a.render, children = _a.children, _b = _a.component, component = _b === void 0 ? 'input' : _b, formik = _a.formik, props = tslib_1.__rest(_a, ["validate", "name", "render", "children", "component", "formik"]);
        var _validate = formik.validate, _validationSchema = formik.validationSchema, restOfFormik = tslib_1.__rest(formik, ["validate", "validationSchema"]);
        var field = {
            value: props.type === 'radio' || props.type === 'checkbox'
                ? props.value
                : getIn(formik.values, name),
            name: name,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
        };
        var bag = { field: field, form: restOfFormik };
        if (render) {
            return render(bag);
        }
        if (isFunction(children)) {
            return children(bag);
        }
        if (typeof component === 'string') {
            var innerRef = props.innerRef, rest = tslib_1.__rest(props, ["innerRef"]);
            return React.createElement(component, tslib_1.__assign({ ref: innerRef }, field, rest, { children: children }));
        }
        return React.createElement(component, tslib_1.__assign({}, bag, props, { children: children }));
    };
    return FieldInner;
}(React.Component));
var Field = connect(FieldInner);

var Form = connect(function (_a) {
    var _b = _a.formik, handleReset = _b.handleReset, handleSubmit = _b.handleSubmit, props = tslib_1.__rest(_a, ["formik"]);
    return (React.createElement("form", tslib_1.__assign({ onReset: handleReset, onSubmit: handleSubmit }, props)));
});
Form.displayName = 'Form';

function withFormik(_a) {
    var _b = _a.mapPropsToValues, mapPropsToValues = _b === void 0 ? function (vanillaProps) {
        var val = {};
        for (var k in vanillaProps) {
            if (vanillaProps.hasOwnProperty(k) &&
                typeof vanillaProps[k] !== 'function') {
                val[k] = vanillaProps[k];
            }
        }
        return val;
    } : _b, config = tslib_1.__rest(_a, ["mapPropsToValues"]);
    return function createFormik(Component) {
        var componentDisplayName = Component.displayName ||
            Component.name ||
            (Component.constructor && Component.constructor.name) ||
            'Component';
        var C = (function (_super) {
            tslib_1.__extends(C, _super);
            function C() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.validate = function (values) {
                    return config.validate(values, _this.props);
                };
                _this.validationSchema = function () {
                    return isFunction(config.validationSchema)
                        ? config.validationSchema(_this.props)
                        : config.validationSchema;
                };
                _this.handleSubmit = function (values, actions) {
                    return config.handleSubmit(values, tslib_1.__assign({}, actions, { props: _this.props }));
                };
                _this.renderFormComponent = function (formikProps) {
                    return React.createElement(Component, tslib_1.__assign({}, _this.props, formikProps));
                };
                return _this;
            }
            C.prototype.render = function () {
                var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
                return (React.createElement(Formik, tslib_1.__assign({}, props, config, { validate: config.validate && this.validate, validationSchema: config.validationSchema && this.validationSchema, initialValues: mapPropsToValues(this.props), onSubmit: this.handleSubmit, render: this.renderFormComponent })));
            };
            C.displayName = "WithFormik(" + componentDisplayName + ")";
            return C;
        }(React.Component));
        return hoistNonReactStatics(C, Component);
    };
}

var move = function (array, from, to) {
    var copy = (array || []).slice();
    var value = copy[from];
    copy.splice(from, 1);
    copy.splice(to, 0, value);
    return copy;
};
var swap = function (array, indexA, indexB) {
    var copy = (array || []).slice();
    var a = copy[indexA];
    copy[indexA] = copy[indexB];
    copy[indexB] = a;
    return copy;
};
var insert = function (array, index, value) {
    var copy = (array || []).slice();
    copy.splice(index, 0, value);
    return copy;
};
var replace = function (array, index, value) {
    var copy = (array || []).slice();
    copy[index] = value;
    return copy;
};
var FieldArrayInner = (function (_super) {
    tslib_1.__extends(FieldArrayInner, _super);
    function FieldArrayInner(props) {
        var _this = _super.call(this, props) || this;
        _this.updateArrayField = function (fn, alterTouched, alterErrors) {
            var _a = _this.props, name = _a.name, validateOnChange = _a.validateOnChange, _b = _a.formik, setFormikState = _b.setFormikState, validateForm = _b.validateForm, values = _b.values, touched = _b.touched, errors = _b.errors;
            setFormikState(function (prevState) { return (tslib_1.__assign({}, prevState, { values: setIn(prevState.values, name, fn(getIn(values, name))), errors: alterErrors
                    ? setIn(prevState.errors, name, fn(getIn(errors, name)))
                    : prevState.errors, touched: alterTouched
                    ? setIn(prevState.touched, name, fn(getIn(touched, name)))
                    : prevState.touched })); }, function () {
                if (validateOnChange) {
                    validateForm();
                }
            });
        };
        _this.push = function (value) {
            return _this.updateArrayField(function (array) { return (array || []).concat([cloneDeep(value)]); }, false, false);
        };
        _this.handlePush = function (value) { return function () { return _this.push(value); }; };
        _this.swap = function (indexA, indexB) {
            return _this.updateArrayField(function (array) { return swap(array, indexA, indexB); }, true, true);
        };
        _this.handleSwap = function (indexA, indexB) { return function () {
            return _this.swap(indexA, indexB);
        }; };
        _this.move = function (from, to) {
            return _this.updateArrayField(function (array) { return move(array, from, to); }, true, true);
        };
        _this.handleMove = function (from, to) { return function () { return _this.move(from, to); }; };
        _this.insert = function (index, value) {
            return _this.updateArrayField(function (array) { return insert(array, index, value); }, true, true);
        };
        _this.handleInsert = function (index, value) { return function () { return _this.insert(index, value); }; };
        _this.replace = function (index, value) {
            return _this.updateArrayField(function (array) { return replace(array, index, value); }, false, false);
        };
        _this.handleReplace = function (index, value) { return function () {
            return _this.replace(index, value);
        }; };
        _this.unshift = function (value) {
            var length = -1;
            _this.updateArrayField(function (array) {
                var arr = array ? [value].concat(array) : [value];
                if (length < 0)
                    length = arr.length;
                return arr;
            }, true, true);
            return length;
        };
        _this.handleUnshift = function (value) { return function () { return _this.unshift(value); }; };
        _this.handleRemove = function (index) { return function () { return _this.remove(index); }; };
        _this.handlePop = function () { return function () { return _this.pop(); }; };
        _this.remove = _this.remove.bind(_this);
        _this.pop = _this.pop.bind(_this);
        return _this;
    }
    FieldArrayInner.prototype.remove = function (index) {
        var result;
        this.updateArrayField(function (array) {
            var copy = array ? array.slice() : [];
            if (!result) {
                result = copy[index];
            }
            if (isFunction(copy.splice)) {
                copy.splice(index, 1);
            }
            return copy;
        }, true, true);
        return result;
    };
    FieldArrayInner.prototype.pop = function () {
        var result;
        this.updateArrayField(function (array) {
            var tmp = array;
            if (!result) {
                result = tmp && tmp.pop && tmp.pop();
            }
            return tmp;
        }, true, true);
        return result;
    };
    FieldArrayInner.prototype.render = function () {
        var arrayHelpers = {
            push: this.push,
            pop: this.pop,
            swap: this.swap,
            move: this.move,
            insert: this.insert,
            replace: this.replace,
            unshift: this.unshift,
            remove: this.remove,
            handlePush: this.handlePush,
            handlePop: this.handlePop,
            handleSwap: this.handleSwap,
            handleMove: this.handleMove,
            handleInsert: this.handleInsert,
            handleReplace: this.handleReplace,
            handleUnshift: this.handleUnshift,
            handleRemove: this.handleRemove,
        };
        var _a = this.props, component = _a.component, render = _a.render, children = _a.children, name = _a.name, _b = _a.formik, _validate = _b.validate, _validationSchema = _b.validationSchema, restOfFormik = tslib_1.__rest(_b, ["validate", "validationSchema"]);
        var props = tslib_1.__assign({}, arrayHelpers, { form: restOfFormik, name: name });
        return component
            ? React.createElement(component, props)
            : render
                ? render(props)
                : children
                    ? typeof children === 'function'
                        ? children(props)
                        : !isEmptyChildren(children) ? React.Children.only(children) : null
                    : null;
    };
    FieldArrayInner.defaultProps = {
        validateOnChange: true,
    };
    return FieldArrayInner;
}(React.Component));
var FieldArray = connect(FieldArrayInner);

var FastFieldInner = (function (_super) {
    tslib_1.__extends(FastFieldInner, _super);
    function FastFieldInner(props) {
        var _this = _super.call(this, props) || this;
        var render = props.render, children = props.children, component = props.component;
        warning(!(component && render), 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored');
        warning(!(component && children && isFunction(children)), 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.');
        warning(!(render && children && !isEmptyChildren(children)), 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored');
        return _this;
    }
    FastFieldInner.prototype.shouldComponentUpdate = function (props) {
        if (this.props.shouldUpdate) {
            return this.props.shouldUpdate(props, this.props);
        }
        else if (getIn(this.props.formik.values, this.props.name) !==
            getIn(props.formik.values, this.props.name) ||
            getIn(this.props.formik.errors, this.props.name) !==
                getIn(props.formik.errors, this.props.name) ||
            getIn(this.props.formik.touched, this.props.name) !==
                getIn(props.formik.touched, this.props.name) ||
            Object.keys(this.props).length !== Object.keys(props).length ||
            this.props.formik.isSubmitting !== props.formik.isSubmitting) {
            return true;
        }
        else {
            return false;
        }
    };
    FastFieldInner.prototype.componentDidMount = function () {
        this.props.formik.registerField(this.props.name, this);
    };
    FastFieldInner.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.name !== prevProps.name) {
            this.props.formik.unregisterField(prevProps.name);
            this.props.formik.registerField(this.props.name, this);
        }
        if (this.props.validate !== prevProps.validate) {
            this.props.formik.registerField(this.props.name, this);
        }
    };
    FastFieldInner.prototype.componentWillUnmount = function () {
        this.props.formik.unregisterField(this.props.name);
    };
    FastFieldInner.prototype.render = function () {
        var _a = this.props, validate = _a.validate, name = _a.name, render = _a.render, children = _a.children, _b = _a.component, component = _b === void 0 ? 'input' : _b, formik = _a.formik, props = tslib_1.__rest(_a, ["validate", "name", "render", "children", "component", "formik"]);
        var _validate = formik.validate, _validationSchema = formik.validationSchema, restOfFormik = tslib_1.__rest(formik, ["validate", "validationSchema"]);
        var field = {
            value: props.type === 'radio' || props.type === 'checkbox'
                ? props.value
                : getIn(formik.values, name),
            name: name,
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
        };
        var bag = { field: field, form: restOfFormik };
        if (render) {
            return render(bag);
        }
        if (isFunction(children)) {
            return children(bag);
        }
        if (typeof component === 'string') {
            var innerRef = props.innerRef, rest = tslib_1.__rest(props, ["innerRef"]);
            return React.createElement(component, tslib_1.__assign({ ref: innerRef }, field, rest, { children: children }));
        }
        return React.createElement(component, tslib_1.__assign({}, bag, props, { children: children }));
    };
    return FastFieldInner;
}(React.Component));
var FastField = connect(FastFieldInner);

var ErrorMessageImpl = (function (_super) {
    tslib_1.__extends(ErrorMessageImpl, _super);
    function ErrorMessageImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorMessageImpl.prototype.shouldComponentUpdate = function (props) {
        if (getIn(this.props.formik.errors, this.props.name) !==
            getIn(props.formik.errors, this.props.name) ||
            getIn(this.props.formik.touched, this.props.name) !==
                getIn(props.formik.touched, this.props.name) ||
            Object.keys(this.props).length !== Object.keys(props).length) {
            return true;
        }
        else {
            return false;
        }
    };
    ErrorMessageImpl.prototype.render = function () {
        var _a = this.props, component = _a.component, formik = _a.formik, render = _a.render, children = _a.children, name = _a.name, rest = tslib_1.__rest(_a, ["component", "formik", "render", "children", "name"]);
        var touch = getIn(formik.touched, name);
        var error = getIn(formik.errors, name);
        return !!touch && !!error
            ? render
                ? isFunction(render) ? render(error) : null
                : children
                    ? isFunction(children) ? children(error) : null
                    : component
                        ? React.createElement(component, rest, error)
                        : error
            : null;
    };
    return ErrorMessageImpl;
}(React.Component));
var ErrorMessage = connect(ErrorMessageImpl);

exports.Formik = Formik;
exports.yupToFormErrors = yupToFormErrors;
exports.validateYupSchema = validateYupSchema;
exports.Field = Field;
exports.Form = Form;
exports.withFormik = withFormik;
exports.move = move;
exports.swap = swap;
exports.insert = insert;
exports.replace = replace;
exports.FieldArray = FieldArray;
exports.getIn = getIn;
exports.setIn = setIn;
exports.setNestedObjectValues = setNestedObjectValues;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isInteger = isInteger;
exports.isString = isString;
exports.isNaN = isNaN;
exports.isEmptyChildren = isEmptyChildren;
exports.isPromise = isPromise;
exports.getActiveElement = getActiveElement;
exports.FastField = FastField;
exports.FormikProvider = FormikProvider;
exports.FormikConsumer = FormikConsumer;
exports.connect = connect;
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=formik.cjs.development.js.map


/***/ }),

/***/ "./node_modules/formik/dist/index.js":
/*!*******************************************!*\
  !*** ./node_modules/formik/dist/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./formik.cjs.development.js */ "./node_modules/formik/dist/formik.cjs.development.js");
}

/***/ }),

/***/ "./node_modules/formik/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/formik/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/gud/index.js":
/*!***********************************!*\
  !*** ./node_modules/gud/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};


/***/ }),

/***/ "./node_modules/history/index.js":
/*!*****************************************************************************!*\
  !*** delegated ./node_modules/history/index.js from dll-reference ./vendor ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(258);

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/invariant/invariant.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(19);

/***/ }),

/***/ "./node_modules/json-to-url/index.js":
/*!*********************************************************************************!*\
  !*** delegated ./node_modules/json-to-url/index.js from dll-reference ./vendor ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(186);

/***/ }),

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.topath/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.topath/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(value));
}

module.exports = toPath;


/***/ }),

/***/ "./node_modules/nserializejson/dist/cjs/index.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/nserializejson/dist/cjs/index.js from dll-reference ./vendor ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(240);

/***/ }),

/***/ "./node_modules/nval-tippy/dist/cjs/index.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/nval-tippy/dist/cjs/index.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(244);

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/prop-types/index.js from dll-reference ./vendor ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(7);

/***/ }),

/***/ "./node_modules/react-dom/server.js":
/*!********************************************************************************!*\
  !*** delegated ./node_modules/react-dom/server.js from dll-reference ./vendor ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(479);

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  if (a === b) return true;

  var arrA = isArray(a)
    , arrB = isArray(b)
    , i
    , length
    , key;

  if (arrA && arrB) {
    length = a.length;
    if (length != b.length) return false;
    for (i = 0; i < length; i++)
      if (!equal(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  var dateA = a instanceof Date
    , dateB = b instanceof Date;
  if (dateA != dateB) return false;
  if (dateA && dateB) return a.getTime() == b.getTime();

  var regexpA = a instanceof RegExp
    , regexpB = b instanceof RegExp;
  if (regexpA != regexpB) return false;
  if (regexpA && regexpB) return a.toString() == b.toString();

  if (a instanceof Object && b instanceof Object) {
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = 0; i < length; i++)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = 0; i < length; i++) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof && a._store) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }

    return true;
  }

  return false;
}

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/react-helmet/lib/Helmet.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react-helmet/lib/Helmet.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(299);

/***/ }),

/***/ "./node_modules/react-paginating/dist/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react-paginating/dist/index.js from dll-reference ./vendor ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(189);

/***/ }),

/***/ "./node_modules/react-redux/lib/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-redux/lib/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(143);

/***/ }),

/***/ "./node_modules/react-router-dom/BrowserRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/BrowserRouter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses HTML5 history.
 */
var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createBrowserHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(_react2.default.Component);

BrowserRouter.propTypes = {
  basename: _propTypes2.default.string,
  forceRefresh: _propTypes2.default.bool,
  getUserConfirmation: _propTypes2.default.func,
  keyLength: _propTypes2.default.number,
  children: _propTypes2.default.node
};
exports.default = BrowserRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/HashRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/HashRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

var _Router = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The public API for a <Router> that uses window.location.hash.
 */
var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = (0, _history.createHashHistory)(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    (0, _warning2.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return _react2.default.createElement(_Router2.default, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(_react2.default.Component);

HashRouter.propTypes = {
  basename: _propTypes2.default.string,
  getUserConfirmation: _propTypes2.default.func,
  hashType: _propTypes2.default.oneOf(["hashbang", "noslash", "slash"]),
  children: _propTypes2.default.node
};
exports.default = HashRouter;

/***/ }),

/***/ "./node_modules/react-router-dom/Link.js":
/*!***********************************************!*\
  !*** ./node_modules/react-router-dom/Link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _history = __webpack_require__(/*! history */ "./node_modules/react-router-dom/node_modules/history/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    (0, _invariant2.default)(this.context.router, "You should not use <Link> outside a <Router>");

    (0, _invariant2.default)(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return _react2.default.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(_react2.default.Component);

Link.propTypes = {
  onClick: _propTypes2.default.func,
  target: _propTypes2.default.string,
  replace: _propTypes2.default.bool,
  to: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  innerRef: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: _propTypes2.default.shape({
    history: _propTypes2.default.shape({
      push: _propTypes2.default.func.isRequired,
      replace: _propTypes2.default.func.isRequired,
      createHref: _propTypes2.default.func.isRequired
    }).isRequired
  }).isRequired
};
exports.default = Link;

/***/ }),

/***/ "./node_modules/react-router-dom/MemoryRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/MemoryRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _MemoryRouter = __webpack_require__(/*! react-router/MemoryRouter */ "./node_modules/react-router/MemoryRouter.js");

var _MemoryRouter2 = _interopRequireDefault(_MemoryRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MemoryRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/NavLink.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router-dom/NavLink.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Route = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route2 = _interopRequireDefault(_Route);

var _Link = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return _react2.default.createElement(_Route2.default, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return _react2.default.createElement(_Link2.default, _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link2.default.propTypes.to,
  exact: _propTypes2.default.bool,
  strict: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  activeClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  isActive: _propTypes2.default.func,
  "aria-current": _propTypes2.default.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

exports.default = NavLink;

/***/ }),

/***/ "./node_modules/react-router-dom/Prompt.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Prompt.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Prompt = __webpack_require__(/*! react-router/Prompt */ "./node_modules/react-router/Prompt.js");

var _Prompt2 = _interopRequireDefault(_Prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Prompt2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Redirect.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/Redirect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Redirect = __webpack_require__(/*! react-router/Redirect */ "./node_modules/react-router/Redirect.js");

var _Redirect2 = _interopRequireDefault(_Redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Redirect2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Route.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/Route.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Route = __webpack_require__(/*! react-router/Route */ "./node_modules/react-router/Route.js");

var _Route2 = _interopRequireDefault(_Route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Route2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Router.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Router = __webpack_require__(/*! react-router/Router */ "./node_modules/react-router/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Router2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/StaticRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/StaticRouter.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StaticRouter = __webpack_require__(/*! react-router/StaticRouter */ "./node_modules/react-router/StaticRouter.js");

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _StaticRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/Switch.js":
/*!*************************************************!*\
  !*** ./node_modules/react-router-dom/Switch.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Switch = __webpack_require__(/*! react-router/Switch */ "./node_modules/react-router/Switch.js");

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Switch2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/generatePath.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/generatePath.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _generatePath = __webpack_require__(/*! react-router/generatePath */ "./node_modules/react-router/generatePath.js");

var _generatePath2 = _interopRequireDefault(_generatePath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _generatePath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-router-dom/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.withRouter = exports.matchPath = exports.generatePath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.NavLink = exports.MemoryRouter = exports.Link = exports.HashRouter = exports.BrowserRouter = undefined;

var _BrowserRouter2 = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/BrowserRouter.js");

var _BrowserRouter3 = _interopRequireDefault(_BrowserRouter2);

var _HashRouter2 = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/HashRouter.js");

var _HashRouter3 = _interopRequireDefault(_HashRouter2);

var _Link2 = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/Link.js");

var _Link3 = _interopRequireDefault(_Link2);

var _MemoryRouter2 = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/MemoryRouter.js");

var _MemoryRouter3 = _interopRequireDefault(_MemoryRouter2);

var _NavLink2 = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/NavLink.js");

var _NavLink3 = _interopRequireDefault(_NavLink2);

var _Prompt2 = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/Prompt.js");

var _Prompt3 = _interopRequireDefault(_Prompt2);

var _Redirect2 = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/Redirect.js");

var _Redirect3 = _interopRequireDefault(_Redirect2);

var _Route2 = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/Route.js");

var _Route3 = _interopRequireDefault(_Route2);

var _Router2 = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/Router.js");

var _Router3 = _interopRequireDefault(_Router2);

var _StaticRouter2 = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/StaticRouter.js");

var _StaticRouter3 = _interopRequireDefault(_StaticRouter2);

var _Switch2 = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/Switch.js");

var _Switch3 = _interopRequireDefault(_Switch2);

var _generatePath2 = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/generatePath.js");

var _generatePath3 = _interopRequireDefault(_generatePath2);

var _matchPath2 = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/matchPath.js");

var _matchPath3 = _interopRequireDefault(_matchPath2);

var _withRouter2 = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/withRouter.js");

var _withRouter3 = _interopRequireDefault(_withRouter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BrowserRouter = _BrowserRouter3.default;
exports.HashRouter = _HashRouter3.default;
exports.Link = _Link3.default;
exports.MemoryRouter = _MemoryRouter3.default;
exports.NavLink = _NavLink3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.generatePath = _generatePath3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/matchPath.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/matchPath.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _matchPath = __webpack_require__(/*! react-router/matchPath */ "./node_modules/react-router/matchPath.js");

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _matchPath2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/DOMUtils.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/LocationUtils.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _resolvePathname = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/cjs/index.js");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/cjs/index.js");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/PathUtils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/PathUtils.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createHashHistory.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createHashHistory.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__(/*! ./DOMUtils */ "./node_modules/react-router-dom/node_modules/history/DOMUtils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

var _createTransitionManager = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? (0, _LocationUtils.createLocation)(entry, undefined, createKey()) : (0, _LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils.createPath;

  var push = function push(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/createTransitionManager.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/createTransitionManager.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = undefined;

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/react-router-dom/node_modules/history/LocationUtils.js");

Object.defineProperty(exports, 'createLocation', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.createLocation;
  }
});
Object.defineProperty(exports, 'locationsAreEqual', {
  enumerable: true,
  get: function get() {
    return _LocationUtils.locationsAreEqual;
  }
});

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/react-router-dom/node_modules/history/PathUtils.js");

Object.defineProperty(exports, 'parsePath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.parsePath;
  }
});
Object.defineProperty(exports, 'createPath', {
  enumerable: true,
  get: function get() {
    return _PathUtils.createPath;
  }
});

var _createBrowserHistory2 = __webpack_require__(/*! ./createBrowserHistory */ "./node_modules/react-router-dom/node_modules/history/createBrowserHistory.js");

var _createBrowserHistory3 = _interopRequireDefault(_createBrowserHistory2);

var _createHashHistory2 = __webpack_require__(/*! ./createHashHistory */ "./node_modules/react-router-dom/node_modules/history/createHashHistory.js");

var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

var _createMemoryHistory2 = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/react-router-dom/node_modules/history/createMemoryHistory.js");

var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createBrowserHistory = _createBrowserHistory3.default;
exports.createHashHistory = _createHashHistory3.default;
exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/history/node_modules/warning/warning.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/warning/warning.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/warning/warning.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/react-router-dom/withRouter.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/withRouter.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _withRouter = __webpack_require__(/*! react-router/withRouter */ "./node_modules/react-router/withRouter.js");

var _withRouter2 = _interopRequireDefault(_withRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _withRouter2.default; // Written in this round about way for babel-transform-imports

/***/ }),

/***/ "./node_modules/react-router/MemoryRouter.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/MemoryRouter.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(282);

/***/ }),

/***/ "./node_modules/react-router/Prompt.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Prompt.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(286);

/***/ }),

/***/ "./node_modules/react-router/Redirect.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/react-router/Redirect.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(287);

/***/ }),

/***/ "./node_modules/react-router/Route.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Route.js from dll-reference ./vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(154);

/***/ }),

/***/ "./node_modules/react-router/Router.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Router.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(87);

/***/ }),

/***/ "./node_modules/react-router/StaticRouter.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/StaticRouter.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(289);

/***/ }),

/***/ "./node_modules/react-router/Switch.js":
/*!***********************************************************************************!*\
  !*** delegated ./node_modules/react-router/Switch.js from dll-reference ./vendor ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(290);

/***/ }),

/***/ "./node_modules/react-router/generatePath.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/react-router/generatePath.js from dll-reference ./vendor ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(152);

/***/ }),

/***/ "./node_modules/react-router/index.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/react-router/index.js from dll-reference ./vendor ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(84);

/***/ }),

/***/ "./node_modules/react-router/matchPath.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/react-router/matchPath.js from dll-reference ./vendor ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(88);

/***/ }),

/***/ "./node_modules/react-router/withRouter.js":
/*!***************************************************************************************!*\
  !*** delegated ./node_modules/react-router/withRouter.js from dll-reference ./vendor ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(291);

/***/ }),

/***/ "./node_modules/react-toastify/lib/index.js":
/*!****************************************************************************************!*\
  !*** delegated ./node_modules/react-toastify/lib/index.js from dll-reference ./vendor ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(227);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!***************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference ./vendor ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(4);

/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/redux-thunk/lib/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(307);

/***/ }),

/***/ "./node_modules/redux/lib/redux.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/redux/lib/redux.js from dll-reference ./vendor ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(148);

/***/ }),

/***/ "./node_modules/resolve-pathname/cjs/index.js":
/*!******************************************************************************************!*\
  !*** delegated ./node_modules/resolve-pathname/cjs/index.js from dll-reference ./vendor ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(140);

/***/ }),

/***/ "./node_modules/tslib/tslib.js":
/*!*************************************!*\
  !*** ./node_modules/tslib/tslib.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});


/***/ }),

/***/ "./node_modules/value-equal/cjs/index.js":
/*!*************************************************************************************!*\
  !*** delegated ./node_modules/value-equal/cjs/index.js from dll-reference ./vendor ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(141);

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*******************************************************************************!*\
  !*** delegated ./node_modules/warning/warning.js from dll-reference ./vendor ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(58);

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/module.js from dll-reference ./vendor ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference ./vendor */ "dll-reference ./vendor"))(275);

/***/ }),

/***/ "dll-reference ./vendor":
/*!***************************!*\
  !*** external "./vendor" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./vendor");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL1VpLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9ib290LXNlcnZlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvcGVyc29uL1BlcnNvbkVkaXRvci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0FwcENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0FwcFJvdXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc2hhcmVkL01vZGFsQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvUGFnaW5nQmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zaGFyZWQvVG9wTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL0F1dGhvcml6ZWRMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL0d1ZXN0TGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbW9kZWxzL1Jlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcGFnZXMvQWRtaW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcGFnZXMvSG9tZVBhZ2UudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wYWdlcy9Mb2dpblBhZ2UudHN4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9wYWdlcy9Qb3J0Zm9saW9QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvcm91dGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc2VydmljZXMvQWNjb3VudFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NlcnZpY2VzL1BlcnNvblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3NlcnZpY2VzL1NlcnZpY2VCYXNlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9Mb2dpblN0b3JlLnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9zdG9yZS9QZXJzb25TdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvc3RvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL3V0aWxzLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYXNwbmV0LXByZXJlbmRlcmluZy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F3ZXNvbWUtZGVib3VuY2UtcHJvbWlzZS9hd2Vzb21lLWRlYm91bmNlLXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JpbmQtZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwMy1uYXRpdmUvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY29ubmVjdGVkLXJlYWN0LXJvdXRlci9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jcmVhdGUtcmVhY3QtY29udGV4dC9saWIvaW1wbGVtZW50YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NyZWF0ZS1yZWFjdC1jb250ZXh0L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVib3VuY2UtcHJvbWlzZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWVwbWVyZ2UvZGlzdC91bWQuanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9kb21haW4td2FpdC9kaXN0L2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm1pay9kaXN0L2Zvcm1pay5janMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm1pay9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtaWsvbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ndWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9pbnZhcmlhbnQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanNvbi10by11cmwvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2guY2xvbmVkZWVwL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudG9wYXRoL2luZGV4LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbnNlcmlhbGl6ZWpzb24vZGlzdC9janMvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbnZhbC10aXBweS9kaXN0L2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1mYXN0LWNvbXBhcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1oZWxtZXQvbGliL0hlbG1ldC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1wYWdpbmF0aW5nL2Rpc3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Ccm93c2VyUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL0hhc2hSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9NZW1vcnlSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vTmF2TGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Qcm9tcHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL1N0YXRpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZ2VuZXJhdGVQYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL21hdGNoUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L1BhdGhVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVIYXNoSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9ub2RlX21vZHVsZXMvaGlzdG9yeS9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXItZG9tL25vZGVfbW9kdWxlcy9oaXN0b3J5L25vZGVfbW9kdWxlcy93YXJuaW5nL3dhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS93aXRoUm91dGVyLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL01lbW9yeVJvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUHJvbXB0LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9SZWRpcmVjdC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvUm91dGUuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL1JvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvU3RhdGljUm91dGVyLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9Td2l0Y2guanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL2dlbmVyYXRlUGF0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyL21hdGNoUGF0aC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvd2l0aFJvdXRlci5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC10b2FzdGlmeS9saWIvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9yZWR1eC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXBhdGhuYW1lL2Nqcy9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvdmFsdWUtZXF1YWwvY2pzL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vbW9kdWxlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuL3ZlbmRvclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3Mi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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQixFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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YWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL0NsaWVudEFwcC9ib290LXNlcnZlci50c3hcIik7XG4iLCJpbXBvcnQgeyBJU2VydmljZVVzZXIgfSBmcm9tIFwiQE1vZGVscy9JU2VydmljZVVzZXJcIjtcclxuaW1wb3J0IHsgTlNlcmlhbGl6ZUpzb24gfSBmcm9tIFwibnNlcmlhbGl6ZWpzb25cIjtcclxuaW1wb3J0IHsgSU5vZGVTZXNzaW9uIH0gZnJvbSBcIkBNb2RlbHMvSU5vZGVTZXNzaW9uXCI7XHJcblxyXG4vKipcclxuICogQ29udGFpbnMgZ2xvYmFsIGlzb21vcnBoaWMgc2Vzc2lvbi5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbHMge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBkYXRhOiBJTm9kZVNlc3Npb24gPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdChkYXRhOiBJTm9kZVNlc3Npb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiR2xvYmFscyBpcyBhbHJlYWR5IGluaXRpYWxpemVkLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhID0gKGRhdGEgfHwge1xyXG4gICAgICAgICAgICBwdWJsaWM6IHt9LCBwcml2YXRlOiB7fVxyXG4gICAgICAgIH0pIGFzIElOb2RlU2Vzc2lvbjtcclxuICAgICAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBVc2UgZG90IG5vdGF0aW9uIGluIG5hbWUgb2YgdGhlIGZvcm0gaW5wdXRzLlxyXG4gICAgICAgIE5TZXJpYWxpemVKc29uLm9wdGlvbnMudXNlRG90U2VwYXJhdG9ySW5QYXRoID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB0aHJvd0lmTm90SW5pdGlhbGl6ZWQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiR2xvYmFscyBpcyBub3QgaW5pdGlhbGl6ZWQuIFlvdSBoYXZlIHRvIGNhbGwgU2Vzc2lvbi5pbml0IGJlZm9yZS5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXREYXRhKCk6IElOb2RlU2Vzc2lvbiB7XHJcbiAgICAgICAgdGhpcy50aHJvd0lmTm90SW5pdGlhbGl6ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0RGF0YShkYXRhOiBJTm9kZVNlc3Npb24pIHtcclxuICAgICAgICB0aGlzLnRocm93SWZOb3RJbml0aWFsaXplZCgpO1xyXG4gICAgICAgIHZhciBvbGREYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHsgLi4ub2xkRGF0YSwgLi4uZGF0YSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHNlcnZpY2VVc2VyKCk6IElTZXJ2aWNlVXNlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpLnB1YmxpYy5zZXJ2aWNlVXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBzZXJ2aWNlVXNlcihzZXJ2aWNlVXNlcjogSVNlcnZpY2VVc2VyKSB7XHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgcHVibGljOiB7IHNlcnZpY2VVc2VyIH0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2VVc2VyICE9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3RvYXN0fSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVaSB7XHJcbiAgICBcclxuICAgIHN0YXRpYyBzaG93RXJyb3JzKC4uLm1lc3NhZ2VzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lc3NhZ2VzLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh4KSkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoeCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAoeCBhcyBhbnkpLmZvckVhY2goKHk6IHN0cmluZykgPT4gdG9hc3QuZXJyb3IoeSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNob3dJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIHRvYXN0LmluZm8obWVzc2FnZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgcmVwbGFjZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSc7XHJcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCJAR2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBJTm9kZVNlc3Npb24gfSBmcm9tIFwiQE1vZGVscy9JTm9kZVNlc3Npb25cIjtcclxuaW1wb3J0IHsgY29tcGxldGVkVGFza3MgfSBmcm9tIFwiZG9tYWluLXdhaXRcIjtcclxuXHJcbnZhciByZW5kZXJIZWxtZXQgPSAoKTogc3RyaW5nID0+IHtcclxuICAgIHZhciBoZWxtZXREYXRhID0gSGVsbWV0LnJlbmRlclN0YXRpYygpO1xyXG4gICAgdmFyIGhlbG1ldFN0cmluZ3MgPSBcIlwiO1xyXG4gICAgZm9yICh2YXIga2V5IGluIGhlbG1ldERhdGEpIHtcclxuICAgICAgICBpZiAoaGVsbWV0RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgIGhlbG1ldFN0cmluZ3MgKz0gaGVsbWV0RGF0YVtrZXldLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhlbG1ldFN0cmluZ3M7XHJcbn07XHJcblxyXG52YXIgY3JlYXRlR2xvYmFscyA9IChub2RlU2Vzc2lvbiwgaW5pdGlhbFJlZHV4U3RhdGUsIGhlbG1ldFN0cmluZ3MpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29tcGxldGVkVGFza3MsXHJcbiAgICAgICAgbm9kZVNlc3Npb24sXHJcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGUsXHJcbiAgICAgICAgaGVsbWV0U3RyaW5nc1xyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNlcnZlclJlbmRlcmVyKChwYXJhbXMpID0+IHtcclxuXHJcbiAgICBHbG9iYWxzLnJlc2V0KCk7XHJcbiAgICBHbG9iYWxzLmluaXQocGFyYW1zLmRhdGEgYXMgSU5vZGVTZXNzaW9uKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgIC8vIFByZXBhcmUgUmVkdXggc3RvcmUgd2l0aCBpbi1tZW1vcnkgaGlzdG9yeSwgYW5kIGRpc3BhdGNoIGEgbmF2aWdhdGlvbiBldmVudC5cclxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIHRvIHRoZSBpbmNvbWluZyBVUkwuXHJcbiAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBwYXJhbXMuYmFzZVVybC5zdWJzdHJpbmcoMCwgcGFyYW1zLmJhc2VVcmwubGVuZ3RoIC0gMSk7IC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaC5cclxuICAgICAgICBjb25zdCB1cmxBZnRlckJhc2VuYW1lID0gcGFyYW1zLnVybC5zdWJzdHJpbmcoYmFzZW5hbWUubGVuZ3RoKTtcclxuICAgICAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKGNyZWF0ZU1lbW9yeUhpc3RvcnkoKSk7XHJcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gocmVwbGFjZSh1cmxBZnRlckJhc2VuYW1lKSk7XHJcblxyXG4gICAgICAgIC8vIFByZXBhcmUgYW4gaW5zdGFuY2Ugb2YgdGhlIGFwcGxpY2F0aW9uIGFuZCBwZXJmb3JtIGFuIGluaXRhbCByZW5kZXIgdGhhdCB3aWxsXHJcbiAgICAgICAgLy8gY2F1c2UgYW55IGFzeW5jIHRhc2tzIChlLmcuLCBkYXRhIGFjY2VzcykgdG8gYmVnaW4uXHJcbiAgICAgICAgY29uc3Qgcm91dGVyQ29udGV4dDogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwID0gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxTdGF0aWNSb3V0ZXIgYmFzZW5hbWU9e2Jhc2VuYW1lfSBjb250ZXh0PXtyb3V0ZXJDb250ZXh0fSBsb2NhdGlvbj17cGFyYW1zLmxvY2F0aW9uLnBhdGh9IGNoaWxkcmVuPXtyb3V0ZXN9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVuZGVyQXBwID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJUb1N0cmluZyhhcHApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbmRlckFwcCgpO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgcmVkaXJlY3Rpb24sIGp1c3Qgc2VuZCB0aGlzIGluZm9ybWF0aW9uIGJhY2sgdG8gdGhlIGhvc3QgYXBwbGljYXRpb24uXHJcbiAgICAgICAgaWYgKHJvdXRlckNvbnRleHQudXJsKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RVcmw6IHJvdXRlckNvbnRleHQudXJsLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczogY3JlYXRlR2xvYmFscyhwYXJhbXMuZGF0YSwgc3RvcmUuZ2V0U3RhdGUoKSwgcmVuZGVySGVsbWV0KCkpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBPbmNlIGFueSBhc3luYyB0YXNrcyBhcmUgZG9uZSwgd2UgY2FuIHBlcmZvcm0gdGhlIGZpbmFsIHJlbmRlci5cclxuICAgICAgICAvLyBXZSBhbHNvIHNlbmQgdGhlIHJlZHV4IHN0b3JlIHN0YXRlLCBzbyB0aGUgY2xpZW50IGNhbiBjb250aW51ZSBleGVjdXRpb24gd2hlcmUgdGhlIHNlcnZlciBsZWZ0IG9mZi5cclxuICAgICAgICBwYXJhbXMuZG9tYWluVGFza3MudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlckFwcCgpLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczogY3JlYXRlR2xvYmFscyhwYXJhbXMuZGF0YSwgc3RvcmUuZ2V0U3RhdGUoKSwgcmVuZGVySGVsbWV0KCkpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LCByZWplY3QpOyAvLyBBbHNvIHByb3BhZ2F0ZSBhbnkgZXJyb3JzIGJhY2sgaW50byB0aGUgaG9zdCBhcHBsaWNhdGlvbi5cclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgSVBlcnNvbk1vZGVsIH0gZnJvbSBcIkBNb2RlbHMvSVBlcnNvbk1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0Zvcm1cIjtcclxuaW1wb3J0IHsgRm9ybWlrIH0gZnJvbSAnZm9ybWlrJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIGRhdGE6IElQZXJzb25Nb2RlbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyc29uRWRpdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbEZvcm06IEZvcm07XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBlbXB0eUZvcm0oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxGb3JtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxGb3JtLmVtcHR5Rm9ybSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiA8Rm9ybWlrXHJcbiAgICAgICAgICAgIGVuYWJsZVJlaW5pdGlhbGl6ZT17dHJ1ZX1cclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiB0aGlzLnByb3BzLmRhdGEuZmlyc3ROYW1lIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IHRoaXMucHJvcHMuZGF0YS5sYXN0TmFtZSB8fCAnJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgdG91Y2hlZCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZSxcclxuICAgICAgICAgICAgICAgIGhhbmRsZUJsdXIsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgICAgICAgICAvKiBhbmQgb3RoZXIgZ29vZGllcyAqL1xyXG4gICAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiIHJlZj17eCA9PiB0aGlzLmVsRm9ybSA9IHh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIGRlZmF1bHRWYWx1ZT17KHRoaXMucHJvcHMuZGF0YS5pZCB8fCAwKS50b1N0cmluZygpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIHJlcXVpcmVkXCIgaHRtbEZvcj1cInBlcnNvbl9fZmlyc3ROYW1lXCI+Rmlyc3QgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBlcnNvbl9fZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcImZpcnN0TmFtZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdmFsdWUtdHlwZT1cInN0cmluZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWwtcmVxdWlyZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLW1zZy1yZXF1aXJlZD1cIkZpcnN0IG5hbWUgaXMgcmVxdWlyZWQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsIHJlcXVpcmVkXCIgaHRtbEZvcj1cInBlcnNvbl9fbGFzdE5hbWVcIj5MYXN0IG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwZXJzb25fX2xhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtcImxhc3ROYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS12YWx1ZS10eXBlPVwic3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXZhbC1yZXF1aXJlZD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbXNnLXJlcXVpcmVkPVwiTGFzdCBuYW1lIGlzIHJlcXVpcmVkLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT4pfVxyXG4gICAgICAgIDwvRm9ybWlrPjtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcblxyXG4vKipcclxuICogVGhpcyBjb21wb25lbnQgY29udGFpbnMgaGVscGZ1bCBtZXRob2Qgd2hpY2hcclxuICogYWxsb3dzIHlvdSB0byBtYWtlIFwiZm9yY2UgdXBkYXRlXCIgb2YgdGhlIHN0dWNrIGVsZW1lbnRzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQXBwQ29tcG9uZW50PFRQcm9wcyA9IHt9LCBUU3RhdGUgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8VFByb3BzLCBUU3RhdGU+IHtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBQbGFjZSBpdCBpbnRvIHRoZSBcImtleVwiIGF0dHJpYnV0ZSBvZiBhbiBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgcmVuZGVyS2V5ID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGwgdGhpcyBpZiBjb21wb25lbnQgc3RhdGUgaXMgc3R1Y2suXHJcbiAgICAgKiBCdXQgeW91IHNob3VsZCBzZXQgdGhlIHJlbmRlcktleSB0byB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZS5cclxuICAgICAqL1xyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBmb3JjZVVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcktleSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBSb3V0ZSwgUm91dGVQcm9wcywgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiQEdsb2JhbHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIGV4dGVuZHMgUm91dGVQcm9wcyB7XHJcbiAgICBsYXlvdXQ6IFJlYWN0LkNvbXBvbmVudENsYXNzPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcHBSb3V0ZSA9ICh7IGNvbXBvbmVudDogQ29tcG9uZW50LCBsYXlvdXQ6IExheW91dCwgcGF0aDogUGF0aCwgLi4ucmVzdCB9OiBJUHJvcHMpID0+IHtcclxuXHJcbiAgICB2YXIgaXNBZG1pblBhdGggPSBQYXRoID09PSBcIi9hZG1pblwiO1xyXG4gICAgdmFyIGlzTG9naW5QYXRoID0gUGF0aCA9PT0gXCIvbG9naW5cIjtcclxuICAgIGlmICghR2xvYmFscy5pc0F1dGhlbnRpY2F0ZWQgJiYgaXNBZG1pblBhdGgpIHtcclxuICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL2xvZ2luXCIgLz47XHJcbiAgICB9XHJcbiAgICBpZiAoR2xvYmFscy5pc0F1dGhlbnRpY2F0ZWQgJiYgaXNMb2dpblBhdGgpIHtcclxuICAgICAgICByZXR1cm4gPFJlZGlyZWN0IHRvPVwiL1wiIC8+O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17cHJvcHMgPT4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKX0gLz47XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwge30+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8cD5WaWV3IG9uIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamdyaWZmaXRoMzQzM1wiPkdpdEh1YjwvYT48L3A+XHJcbiAgICAgICAgICAgIDxwPkNvcHlyaWdodCAoYykgMjAxOSBKYXljZWUgR3JpZmZpdGg8L3A+XHJcbiAgICAgICAgPC9mb290ZXI+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5TZXJpYWxpemVKc29uIH0gZnJvbSBcIm5zZXJpYWxpemVqc29uXCI7XHJcbmltcG9ydCB7IGVtcHR5Rm9ybSB9IGZyb20gXCJAVXRpbHNcIjtcclxuaW1wb3J0IHsgTlZhbFRpcHB5IH0gZnJvbSBcIm52YWwtdGlwcHlcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxSZWFjdC5Gb3JtSFRNTEF0dHJpYnV0ZXM8SFRNTEZvcm1FbGVtZW50PiwgSFRNTEZvcm1FbGVtZW50PiB7XHJcbiAgICBjaGlsZHJlbjogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIHt9PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdG9yOiBOVmFsVGlwcHk7XHJcbiAgICBwcm90ZWN0ZWQgZWxGb3JtOiBIVE1MRm9ybUVsZW1lbnQ7XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5pc1ZhbGlkKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgZW1wdHlGb3JtKCk6IHZvaWQge1xyXG4gICAgICAgIGVtcHR5Rm9ybSh0aGlzLmVsRm9ybSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBiaW5kXHJcbiAgICBwdWJsaWMgZ2V0RGF0YTxUPigpOiBUIHtcclxuICAgICAgICByZXR1cm4gTlNlcmlhbGl6ZUpzb24uc2VyaWFsaXplRm9ybSh0aGlzLmVsRm9ybSkgYXMgYW55IGFzIFQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBuZXcgTlZhbFRpcHB5KHRoaXMuZWxGb3JtKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxmb3JtIHsuLi50aGlzLnByb3BzfSByZWY9e3ggPT4gdGhpcy5lbEZvcm0gPSB4fT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Zvcm0+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFwiQFN0eWxlcy9sb2FkZXIuc2Nzc1wiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaXNOb2RlIH0gZnJvbSBcIkBVdGlsc1wiO1xyXG5pbXBvcnQgQXBwQ29tcG9uZW50IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvQXBwQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBzaG93OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIgZXh0ZW5kcyBBcHBDb21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgdmFyIGNzcyA9IHtcImRpc3BsYXlcIjogXCJub25lXCJ9O1xyXG5cclxuICAgICAgICBpZiAoIWlzTm9kZSgpKSB7XHJcbiAgICAgICAgICAgIGNzcyA9IHsgXCJkaXNwbGF5XCI6ICh0aGlzLnByb3BzLnNob3cgPyBcImJsb2NrXCIgOiBcIm5vbmVcIikgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXt0aGlzLnJlbmRlcktleX0gY2xhc3NOYW1lPVwibG9hZGVyLWJnXCIgc3R5bGU9e2Nzc30+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMiBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMyBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlNCBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlNSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlNiBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlNyBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlOCBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlOSBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2stY2lyY2xlMTAgc2stY2hpbGRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNrLWNpcmNsZTExIHNrLWNoaWxkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzay1jaXJjbGUxMiBzay1jaGlsZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJib290c3RyYXAzLW5hdGl2ZVwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICB0aXRsZTogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdIHwgYW55O1xyXG4gICAgYnV0dG9ucz86IGFueTtcclxuICAgIGNoaWxkcmVuPzogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdIHwgYW55O1xyXG4gICAgb25TaG93PzogKCkgPT4gdm9pZDtcclxuICAgIG9uSGlkZT86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIHt9PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG1vZGFsUGx1Z2luOiBNb2RhbDtcclxuICAgIHByb3RlY3RlZCBlbE1vZGFsOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbFBsdWdpbi5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxQbHVnaW4uaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxQbHVnaW4gPSBuZXcgTW9kYWwodGhpcy5lbE1vZGFsKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNob3cpIHtcclxuICAgICAgICAgICAgdGhpcy5lbE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJzaG93LmJzLm1vZGFsXCIgYXMgYW55LCAoKSA9PiB0aGlzLnByb3BzLm9uU2hvdygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25IaWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiaGlkZS5icy5tb2RhbFwiIGFzIGFueSwgKCkgPT4gdGhpcy5wcm9wcy5vbkhpZGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubW9kYWxQbHVnaW4uaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgdGFiSW5kZXg9ey0xfSByb2xlPVwiZGlhbG9nXCIgcmVmPXt4ID0+IHRoaXMuZWxNb2RhbCA9IHh9PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYnV0dG9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFBhZ2luYXRpb24sIHsgUGFnaW5hdGlvblByb3BzIH0gZnJvbSBcInJlYWN0LXBhZ2luYXRpbmdcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBiaW5kIGZyb20gJ2JpbmQtZGVjb3JhdG9yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcclxuICAgIHRvdGFsUmVzdWx0czogbnVtYmVyO1xyXG4gICAgbGltaXRQZXJQYWdlOiBudW1iZXI7XHJcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG4gICAgb25DaGFuZ2VQYWdlOiAocGFnZU51bTogbnVtYmVyKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vKiBCZWxvdyBjb2RlIG9mIHRoZSAnUGFnaW5hdGlvbicgY29tcG9uZW50IHdhcyB0YWtlbiBcclxuZnJvbSB0aGUgaHR0cHM6Ly9naXRodWIuY29tL0Nob1RvdE9TUy9yZWFjdC1wYWdpbmF0aW5nIFxyXG5hbmQgcmVtYWtlZCBmb3IgdGhlIEJvb3RzdHJhcCBzdHlsZS4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmdCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBlbEZpcnN0UGFnZUJ0bjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgZWxMYXN0UGFnZUJ0bjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHB1YmxpYyBzZXRGaXJzdFBhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbEZpcnN0UGFnZUJ0bi5jbGljaygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAYmluZFxyXG4gICAgcHVibGljIHNldExhc3RQYWdlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWxMYXN0UGFnZUJ0bi5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgdG90YWw9e3RoaXMucHJvcHMudG90YWxSZXN1bHRzfVxyXG4gICAgICAgICAgICBsaW1pdD17dGhpcy5wcm9wcy5saW1pdFBlclBhZ2V9XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnByb3BzLmN1cnJlbnRQYWdlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgeyh7XHJcbiAgICAgICAgICAgICAgICBwYWdlcyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICAgICAgaGFzTmV4dFBhZ2UsXHJcbiAgICAgICAgICAgICAgICBoYXNQcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c1BhZ2UsXHJcbiAgICAgICAgICAgICAgICBuZXh0UGFnZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsUGFnZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRQYWdlSXRlbVByb3BzXHJcbiAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0UGFnZUl0ZW1Qcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VWYWx1ZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsRmlyc3RQYWdlQnRuID0geH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc1ByZXZpb3VzUGFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRQYWdlSXRlbVByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VWYWx1ZTogcHJldmlvdXNQYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnPCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlcy5tYXAocGFnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BhZ2V9IGNsYXNzTmFtZT17cGFnZSA9PT0gY3VycmVudFBhZ2UgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRQYWdlSXRlbVByb3BzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVmFsdWU6IHBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc05leHRQYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0UGFnZUl0ZW1Qcm9wcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVmFsdWU6IG5leHRQYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnPid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldFBhZ2VJdGVtUHJvcHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVmFsdWU6IHRvdGFsUGFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ggPT4gdGhpcy5lbExhc3RQYWdlQnRuID0geH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICA8L1BhZ2luYXRpb24+XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF2TGluaywgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgR2xvYmFscyBmcm9tIFwiQEdsb2JhbHNcIjtcclxuaW1wb3J0IEFjY291bnRTZXJ2aWNlIGZyb20gXCJAU2VydmljZXMvQWNjb3VudFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tIFwiYm9vdHN0cmFwMy1uYXRpdmVcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5cclxuY2xhc3MgVG9wTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgeyBsb2dvdXRBY3Rpb246IGJvb2xlYW4gfT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGxvZ291dEFjdGlvbjogZmFsc2UgfTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgYXN5bmMgb25DbGlja1NpZ25PdXQoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQW5jaG9yRWxlbWVudD4pIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGF3YWl0IEFjY291bnRTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2dvdXRBY3Rpb246IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbERyb3Bkb3duOiBIVE1MQW5jaG9yRWxlbWVudDtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB2YXIgZHJvcGRvd24gPSBuZXcgRHJvcGRvd24odGhpcy5lbERyb3Bkb3duKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvZ291dEFjdGlvbikge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZSBjb2xsYXBzZWRcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24tYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5KYXljZWUgR3JpZmZpdGg8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2UgbmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayBleGFjdCB0bz17Jy8nfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5Ib21lPC9OYXZMaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayBleGFjdCB0bz17Jy9wb3J0Zm9saW8nfSBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIj5Qb3J0Zm9saW88L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIGV4YWN0IHRvPXsnL2FkbWluJ30gYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCI+QWRtaW48L05hdkxpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHJlZj17eCA9PiB0aGlzLmVsRHJvcGRvd24gPSB4fSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0dsb2JhbHMuc2VydmljZVVzZXIgPyBHbG9iYWxzLnNlcnZpY2VVc2VyLmxvZ2luIDogbnVsbH0mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJldFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0dsb2JhbHMuc2VydmljZVVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja1NpZ25PdXR9PlNpZ24gb3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvbG9naW5cIj5TaWduIGluPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVG9wTWVudSBhcyBhbnkpOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNvbWJpbmVSZWR1Y2VycywgU3RvcmVFbmhhbmNlciwgU3RvcmUsIFN0b3JlRW5oYW5jZXJTdG9yZUNyZWF0b3IsIFJlZHVjZXJzTWFwT2JqZWN0IH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlLCBMT0NBVElPTl9DSEFOR0UgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJztcclxuLy92YXIgcm91dGVyUmVkdWNlciA9IHJlcXVpcmUoXCJjb25uZWN0ZWQtcmVhY3Qtcm91dGVyL2xpYi9yZWR1Y2VyXCIpO1xyXG4vL2ltcG9ydCB7cm91dGVyUmVkdWNlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiO1xyXG5pbXBvcnQgKiBhcyBTdG9yZU1vZHVsZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSwgcmVkdWNlcnMgfSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaGlzdG9yeTogSGlzdG9yeSwgaW5pdGlhbFN0YXRlPzogQXBwbGljYXRpb25TdGF0ZSkge1xyXG4gICAgLy8gQnVpbGQgbWlkZGxld2FyZS4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB0aGF0IGNhbiBwcm9jZXNzIHRoZSBhY3Rpb25zIGJlZm9yZSB0aGV5IHJlYWNoIHRoZSBzdG9yZS5cclxuICAgIGNvbnN0IHdpbmRvd0lmRGVmaW5lZCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHdpbmRvdyBhcyBhbnk7XHJcbiAgICAvLyBJZiBkZXZUb29scyBpcyBpbnN0YWxsZWQsIGNvbm5lY3QgdG8gaXRcclxuICAgIGNvbnN0IGRldlRvb2xzRXh0ZW5zaW9uID0gd2luZG93SWZEZWZpbmVkICYmIHdpbmRvd0lmRGVmaW5lZC5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIGFzICgpID0+IFN0b3JlRW5oYW5jZXI7XHJcbiAgICBjb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gY29tcG9zZShcclxuICAgICAgICBhcHBseU1pZGRsZXdhcmUodGh1bmssIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkpLFxyXG4gICAgICAgIGRldlRvb2xzRXh0ZW5zaW9uID8gZGV2VG9vbHNFeHRlbnNpb24oKSA6IDxTPihuZXh0OiBTdG9yZUVuaGFuY2VyU3RvcmVDcmVhdG9yPFM+KSA9PiBuZXh0XHJcbiAgICApKGNyZWF0ZVN0b3JlKTtcclxuXHJcbiAgICAvLyBDb21iaW5lIGFsbCByZWR1Y2VycyBhbmQgaW5zdGFudGlhdGUgdGhlIGFwcC13aWRlIHN0b3JlIGluc3RhbmNlXHJcbiAgICBjb25zdCBhbGxSZWR1Y2VycyA9IGJ1aWxkUm9vdFJlZHVjZXIocmVkdWNlcnMsIGhpc3RvcnkpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKGFsbFJlZHVjZXJzLCBpbml0aWFsU3RhdGUgYXMgYW55KSBhcyBTdG9yZTxBcHBsaWNhdGlvblN0YXRlPjtcclxuXHJcbiAgICAvLyBFbmFibGUgV2VicGFjayBob3QgbW9kdWxlIHJlcGxhY2VtZW50IGZvciByZWR1Y2Vyc1xyXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcclxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zdG9yZScsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFJvb3RSZWR1Y2VyID0gcmVxdWlyZTx0eXBlb2YgU3RvcmVNb2R1bGU+KCcuL3N0b3JlJyk7XHJcbiAgICAgICAgICAgIHN0b3JlLnJlcGxhY2VSZWR1Y2VyKGJ1aWxkUm9vdFJlZHVjZXIobmV4dFJvb3RSZWR1Y2VyLnJlZHVjZXJzLCBoaXN0b3J5KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5jb25zdCByb3V0ZXJSZWR1Y2VyID0gKGhpc3RvcnkpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcclxuICAgICAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFyZzogYW55ID0ge30pID0+IHtcclxuICAgICAgICBpZiAoYXJnLnR5cGUgPT09IExPQ0FUSU9OX0NIQU5HRSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYXJnLnBheWxvYWQgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gYnVpbGRSb290UmVkdWNlcihhbGxSZWR1Y2VyczogUmVkdWNlcnNNYXBPYmplY3QsIGhpc3RvcnkpIHtcclxuICAgIHJldHVybiBjb21iaW5lUmVkdWNlcnM8QXBwbGljYXRpb25TdGF0ZT4oey4uLmFsbFJlZHVjZXJzLCAuLi57IHJvdXRlcjogcm91dGVyUmVkdWNlcihoaXN0b3J5KSB9fSBhcyBhbnkpO1xyXG59XHJcbiIsImltcG9ydCBUb3BNZW51IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvVG9wTWVudVwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiQFN0eWxlcy9hdXRob3JpemVkTGF5b3V0LnNjc3NcIjtcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0Zvb3RlclwiO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxudHlwZSBQcm9wcyA9IElQcm9wcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIHt9PiB7XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImF1dGhvcml6ZWRMYXlvdXRcIiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxUb3BNZW51IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgVG9wTWVudSBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL1RvcE1lbnVcIjtcclxuaW1wb3J0IFwiQFN0eWxlcy9ndWVzdExheW91dC5zY3NzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvRm9vdGVyXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogYW55O1xyXG59XHJcblxyXG50eXBlIFByb3BzID0gSVByb3BzICYgUm91dGVDb21wb25lbnRQcm9wczxhbnk+IDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd1ZXN0TGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7fT4ge1xyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImd1ZXN0TGF5b3V0XCIgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICA8VG9wTWVudSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9kaXY+O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0PFQ+IHtcclxuICAgIHB1YmxpYyB2YWx1ZTogVDtcclxuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGdldCBoYXNFcnJvcnMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmVycm9ycykgJiYgdGhpcy5lcnJvcnMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCwgLi4uZXJyb3JzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9yc1swXSA9PSB1bmRlZmluZWQgfHwgZXJyb3JzWzBdID09IG51bGwgPyBbXSA6IGVycm9ycztcclxuICAgIH1cclxufSIsImltcG9ydCBcIkBTdHlsZXMvbWFpbi5zY3NzXCI7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMsIHdpdGhSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IElQZXJzb25Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lQZXJzb25Nb2RlbFwiO1xyXG5pbXBvcnQgeyBQZXJzb25TdG9yZSB9IGZyb20gXCJAU3RvcmUvUGVyc29uU3RvcmVcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCJAU3RvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBQYWdpbmdCYXIgfSBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL1BhZ2luZ0JhclwiO1xyXG5pbXBvcnQgUGVyc29uRWRpdG9yIGZyb20gXCJAQ29tcG9uZW50cy9wZXJzb24vUGVyc29uRWRpdG9yXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Mb2FkZXJcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvTW9kYWxDb21wb25lbnRcIjtcclxuaW1wb3J0IEF3ZXNvbWVEZWJvdW5jZVByb21pc2UgZnJvbSBcImF3ZXNvbWUtZGVib3VuY2UtcHJvbWlzZVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IFJvdXRlQ29tcG9uZW50UHJvcHM8e30+ICYgdHlwZW9mIFBlcnNvblN0b3JlLmFjdGlvbkNyZWF0b3JzICYgUGVyc29uU3RvcmUuSVN0YXRlO1xyXG5cclxuaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICBzZWFyY2hUZXJtOiBzdHJpbmc7XHJcbiAgICBwYWdlTnVtOiBudW1iZXI7XHJcbiAgICBsaW1pdFBlclBhZ2U6IG51bWJlcjtcclxuICAgIHJvd09mZnNldDogbnVtYmVyO1xyXG4gICAgbW9kZWxGb3JFZGl0OiBJUGVyc29uTW9kZWw7XHJcbn1cclxuXHJcblxyXG5jbGFzcyBBZG1pblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIElTdGF0ZT4ge1xyXG5cclxuICAgIHByaXZhdGUgcGFnaW5nQmFyOiBQYWdpbmdCYXI7XHJcblxyXG4gICAgcHJpdmF0ZSBlbE1vZGFsQWRkOiBNb2RhbENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZWxNb2RhbEVkaXQ6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBlbE1vZGFsRGVsZXRlOiBNb2RhbENvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIHBlcnNvbkVkaXRvckFkZDogUGVyc29uRWRpdG9yO1xyXG4gICAgcHJpdmF0ZSBwZXJzb25FZGl0b3JFZGl0OiBQZXJzb25FZGl0b3I7XHJcblxyXG4gICAgcHJpdmF0ZSBkZWJvdW5jZWRTZWFyY2g6ICh0ZXJtOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBcIlwiLFxyXG4gICAgICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgICAgICBsaW1pdFBlclBhZ2U6IDUsXHJcbiAgICAgICAgICAgIHJvd09mZnNldDogMCxcclxuICAgICAgICAgICAgbW9kZWxGb3JFZGl0OiB7fVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGVib3VuY2VkU2VhcmNoID0gQXdlc29tZURlYm91bmNlUHJvbWlzZSgodGVybTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnNlYXJjaFJlcXVlc3QodGVybSk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hSZXF1ZXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxNb2RhbEFkZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWxBZGQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbE1vZGFsRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWxFZGl0LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWxNb2RhbERlbGV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWxEZWxldGUuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DaGFuZ2VQYWdlKHBhZ2VOdW06IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCByb3dPZmZzZXQgPSBNYXRoLmNlaWwoKHBhZ2VOdW0gLSAxKSAqIHRoaXMuc3RhdGUubGltaXRQZXJQYWdlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZU51bSwgcm93T2Zmc2V0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrU2hvd0FkZE1vZGFsKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsQWRkLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1Nob3dFZGl0TW9kYWwoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sIG1vZGVsRm9yRWRpdDogSVBlcnNvbk1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGVsRm9yRWRpdCB9KTtcclxuICAgICAgICB0aGlzLmVsTW9kYWxFZGl0LnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1Nob3dEZWxldGVNb2RhbChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PiwgbW9kZWxGb3JFZGl0OiBJUGVyc29uTW9kZWwpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWxGb3JFZGl0IH0pO1xyXG4gICAgICAgIHRoaXMuZWxNb2RhbERlbGV0ZS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2xpY2tQZXJzb25FZGl0b3JBZGRfX3NhdmVCdG4oZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBlcnNvbkVkaXRvckFkZC5lbEZvcm0uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRSZXF1ZXN0KHRoaXMucGVyc29uRWRpdG9yQWRkLmVsRm9ybS5nZXREYXRhKCkpO1xyXG4gICAgICAgIHRoaXMucGFnaW5nQmFyLnNldExhc3RQYWdlKCk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsQWRkLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1BlcnNvbkVkaXRvckVkaXRfX3NhdmVCdG4oZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucGVyc29uRWRpdG9yRWRpdC5lbEZvcm0uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnBlcnNvbkVkaXRvckVkaXQuZWxGb3JtLmdldERhdGEoKTtcclxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVJlcXVlc3QoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsRWRpdC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2xpY2tQZXJzb25FZGl0b3JEZWxldGVfX3NhdmVCdG4oZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZVJlcXVlc3QodGhpcy5zdGF0ZS5tb2RlbEZvckVkaXQuaWQpO1xyXG4gICAgICAgIHRoaXMuZWxNb2RhbERlbGV0ZS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHJlbmRlclJvdyhwZXJzb246IElQZXJzb25Nb2RlbCkge1xyXG4gICAgICAgIHJldHVybiA8dHIga2V5PXtwZXJzb24uaWR9PlxyXG4gICAgICAgICAgICA8dGQ+e3BlcnNvbi5maXJzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntwZXJzb24ubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt4ID0+IHRoaXMub25DbGlja1Nob3dFZGl0TW9kYWwoeCwgcGVyc29uKX0+RWRpdDwvYnV0dG9uPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3ggPT4gdGhpcy5vbkNsaWNrU2hvd0RlbGV0ZU1vZGFsKHgsIHBlcnNvbil9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+O1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICByZW5kZXJSb3dzKGRhdGE6IElQZXJzb25Nb2RlbFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgLnNsaWNlKHRoaXMuc3RhdGUucm93T2Zmc2V0LCB0aGlzLnN0YXRlLnJvd09mZnNldCArIHRoaXMuc3RhdGUubGltaXRQZXJQYWdlKVxyXG4gICAgICAgICAgICAubWFwKHggPT4gdGhpcy5yZW5kZXJSb3coeCkpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNoYW5nZVNlYXJjaElucHV0KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLmRlYm91bmNlZFNlYXJjaCh2YWwpO1xyXG4gICAgICAgIHRoaXMucGFnaW5nQmFyLnNldEZpcnN0UGFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SmF5Y2VlIEdyaWZmaXRoIC0gUG9ydGZvbGlvPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcblxyXG4gICAgICAgICAgICA8TG9hZGVyIHNob3c9e3RoaXMucHJvcHMuaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHkgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja1Nob3dBZGRNb2RhbH0+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBmb3IgcGVvcGxlLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBuYW1lPC90aD48dGg+TGFzdCBuYW1lPC90aD48dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKHRoaXMucHJvcHMucGVvcGxlKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICB7LyogQWRkIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxBZGQgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vbkNsaWNrUGVyc29uRWRpdG9yQWRkX19zYXZlQnRufT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCBwZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVyc29uRWRpdG9yQWRkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uRWRpdG9yQWRkLmVtcHR5Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkVkaXRvciByZWY9e3ggPT4gdGhpcy5wZXJzb25FZGl0b3JBZGQgPSB4fSBkYXRhPXt7fX0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbENvbXBvbmVudD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBFZGl0IG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxFZGl0ID0geH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM9ezxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1BlcnNvbkVkaXRvckVkaXRfX3NhdmVCdG59PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtgRWRpdCBwZXJzb246ICR7dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXQuZmlyc3ROYW1lfSAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0Lmxhc3ROYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJzb25FZGl0b3JFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlbEZvckVkaXQ6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkVkaXRvciByZWY9e3ggPT4gdGhpcy5wZXJzb25FZGl0b3JFZGl0ID0geH0gZGF0YT17dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXR9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWxDb21wb25lbnQ+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVsZXRlIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxEZWxldGUgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tQZXJzb25FZGl0b3JEZWxldGVfX3NhdmVCdG59PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BEZWxldGUgcGVyc29uOiAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0LmZpcnN0TmFtZX0gJHt0aGlzLnN0YXRlLm1vZGVsRm9yRWRpdC5sYXN0TmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxwPkRvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgdGhpcyBwZXJzb24/PC9wPlxyXG4gICAgICAgICAgICA8L01vZGFsQ29tcG9uZW50PlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luZ0JhclxyXG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMucGFnaW5nQmFyID0geH1cclxuICAgICAgICAgICAgICAgIHRvdGFsUmVzdWx0cz17dGhpcy5wcm9wcy5wZW9wbGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgbGltaXRQZXJQYWdlPXt0aGlzLnN0YXRlLmxpbWl0UGVyUGFnZX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnN0YXRlLnBhZ2VOdW19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3RoaXMub25DaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNvbXBvbmVudCA9IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnBlcnNvbiwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHMuXHJcbiAgICBQZXJzb25TdG9yZS5hY3Rpb25DcmVhdG9ycyAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzLlxyXG4pKEFkbWluUGFnZSBhcyBhbnkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHdpdGhSb3V0ZXIoY29tcG9uZW50IGFzIGFueSkgYXMgYW55IGFzIHR5cGVvZiBBZG1pblBhZ2UpIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IGxvZ28gZnJvbSBcIkBJbWFnZXMvbG9nby5wbmdcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSBSb3V0ZUNvbXBvbmVudFByb3BzPHt9PjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7fT4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVsbWV0PlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkpheWNlZSBHcmlmZml0aCAtIEhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlbG1ldD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e1wiZm9udFNpemVcIjogXCI1MnB4XCJ9fT5IYXBweSBjb2RpbmchPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJTG9naW5Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lMb2dpbk1vZGVsXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Mb2FkZXJcIjtcclxuaW1wb3J0IHsgQXBwbGljYXRpb25TdGF0ZSB9IGZyb20gXCJAU3RvcmUvaW5kZXhcIjtcclxuaW1wb3J0IHsgTG9naW5TdG9yZSB9IGZyb20gXCJAU3RvcmUvTG9naW5TdG9yZVwiO1xyXG5pbXBvcnQgXCJAU3R5bGVzL21haW4uc2Nzc1wiOztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCwgUm91dGVDb21wb25lbnRQcm9wcywgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IGJpbmQgZnJvbSAnYmluZC1kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Gb3JtXCI7XHJcblxyXG50eXBlIFByb3BzID0gUm91dGVDb21wb25lbnRQcm9wczx7fT4gJiB0eXBlb2YgTG9naW5TdG9yZS5hY3Rpb25DcmVhdG9ycyAmIExvZ2luU3RvcmUuSVN0YXRlO1xyXG5cclxuY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7fT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBlbExvYWRlcjogTG9hZGVyO1xyXG4gICAgZWxGb3JtOiBGb3JtO1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMucHJvcHMuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmVsTG9hZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxMb2FkZXIuZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHByaXZhdGUgYXN5bmMgb25DbGlja1N1Ym1pdEJ0bihlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5lbEZvcm0uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5lbEZvcm0uZ2V0RGF0YTxJTG9naW5Nb2RlbD4oKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2dpblJlcXVlc3QoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuaW5kaWNhdG9ycy5sb2dpblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIi8+O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXYgaWQ9XCJsb2dpblBhZ2VcIj5cclxuXHJcbiAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+TG9naW4gcGFnZSAtIEpheWNlZSBHcmlmZml0aDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVsbWV0PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPExvYWRlciByZWY9e3ggPT4gdGhpcy5lbExvYWRlciA9IHh9IHNob3c9e3RoaXMucHJvcHMuaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luQ29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5UeXBlIGFueSBsb2dpbiBhbmQgcGFzc3dvcmQgdG8gZW50ZXIuPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtIHJlZj17eCA9PiB0aGlzLmVsRm9ybSA9IHh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0TG9naW5cIj5Mb2dpbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e1wibG9naW5cIn0gZGF0YS12YWx1ZS10eXBlPVwic3RyaW5nXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpbnB1dExvZ2luXCIgZGF0YS12YWwtcmVxdWlyZWQ9XCJ0cnVlXCIgZGF0YS1tc2ctcmVxdWlyZWQ9XCJMb2dpbiBpcyByZXF1aXJlZC5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0TG9naW5cIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPXtcInBhc3N3b3JkXCJ9IGRhdGEtdmFsdWUtdHlwZT1cInN0cmluZ1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiaW5wdXRQYXNzd29yZFwiIGRhdGEtdmFsLXJlcXVpcmVkPVwidHJ1ZVwiIGRhdGEtbXNnLXJlcXVpcmVkPVwiUGFzc3dvcmQgaXMgcmVxdWlyZWQuXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgb25DbGljaz17dGhpcy5vbkNsaWNrU3VibWl0QnRufT5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj47XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBjb21wb25lbnQgPSBjb25uZWN0KFxyXG4gICAgKHN0YXRlOiBBcHBsaWNhdGlvblN0YXRlKSA9PiBzdGF0ZS5sb2dpbiwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHNcclxuICAgIExvZ2luU3RvcmUuYWN0aW9uQ3JlYXRvcnMgLy8gU2VsZWN0cyB3aGljaCBhY3Rpb24gY3JlYXRvcnMgYXJlIG1lcmdlZCBpbnRvIHRoZSBjb21wb25lbnQncyBwcm9wc1xyXG4pKExvZ2luUGFnZSBhcyBhbnkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHdpdGhSb3V0ZXIoY29tcG9uZW50IGFzIGFueSkgYXMgYW55IGFzIHR5cGVvZiBMb2dpblBhZ2UpIiwiaW1wb3J0IFwiQFN0eWxlcy9tYWluLnNjc3NcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gXCJyZWFjdC1oZWxtZXRcIjtcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcywgd2l0aFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSVBlcnNvbk1vZGVsIH0gZnJvbSBcIkBNb2RlbHMvSVBlcnNvbk1vZGVsXCI7XHJcbmltcG9ydCB7IFBlcnNvblN0b3JlIH0gZnJvbSBcIkBTdG9yZS9QZXJzb25TdG9yZVwiO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSBcIkBTdG9yZS9pbmRleFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFBhZ2luZ0JhciB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvUGFnaW5nQmFyXCI7XHJcbmltcG9ydCBQZXJzb25FZGl0b3IgZnJvbSBcIkBDb21wb25lbnRzL3BlcnNvbi9QZXJzb25FZGl0b3JcIjtcclxuaW1wb3J0IExvYWRlciBmcm9tIFwiQENvbXBvbmVudHMvc2hhcmVkL0xvYWRlclwiO1xyXG5pbXBvcnQgYmluZCBmcm9tICdiaW5kLWRlY29yYXRvcic7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSBcIkBDb21wb25lbnRzL3NoYXJlZC9Nb2RhbENvbXBvbmVudFwiO1xyXG5pbXBvcnQgQXdlc29tZURlYm91bmNlUHJvbWlzZSBmcm9tIFwiYXdlc29tZS1kZWJvdW5jZS1wcm9taXNlXCI7XHJcblxyXG50eXBlIFByb3BzID0gUm91dGVDb21wb25lbnRQcm9wczx7fT4gJiB0eXBlb2YgUGVyc29uU3RvcmUuYWN0aW9uQ3JlYXRvcnMgJiBQZXJzb25TdG9yZS5JU3RhdGU7XHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICAgIHNlYXJjaFRlcm06IHN0cmluZztcclxuICAgIHBhZ2VOdW06IG51bWJlcjtcclxuICAgIGxpbWl0UGVyUGFnZTogbnVtYmVyO1xyXG4gICAgcm93T2Zmc2V0OiBudW1iZXI7XHJcbiAgICBtb2RlbEZvckVkaXQ6IElQZXJzb25Nb2RlbDtcclxufVxyXG5cclxuXHJcbmNsYXNzIFBvcnRmb2xpb1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIElTdGF0ZT4ge1xyXG5cclxuICAgIHByaXZhdGUgcGFnaW5nQmFyOiBQYWdpbmdCYXI7XHJcblxyXG4gICAgcHJpdmF0ZSBlbE1vZGFsQWRkOiBNb2RhbENvbXBvbmVudDtcclxuICAgIHByaXZhdGUgZWxNb2RhbEVkaXQ6IE1vZGFsQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBlbE1vZGFsRGVsZXRlOiBNb2RhbENvbXBvbmVudDtcclxuXHJcbiAgICBwcml2YXRlIHBlcnNvbkVkaXRvckFkZDogUGVyc29uRWRpdG9yO1xyXG4gICAgcHJpdmF0ZSBwZXJzb25FZGl0b3JFZGl0OiBQZXJzb25FZGl0b3I7XHJcblxyXG4gICAgcHJpdmF0ZSBkZWJvdW5jZWRTZWFyY2g6ICh0ZXJtOiBzdHJpbmcpID0+IHZvaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBcIlwiLFxyXG4gICAgICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgICAgICBsaW1pdFBlclBhZ2U6IDUsXHJcbiAgICAgICAgICAgIHJvd09mZnNldDogMCxcclxuICAgICAgICAgICAgbW9kZWxGb3JFZGl0OiB7fVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGVib3VuY2VkU2VhcmNoID0gQXdlc29tZURlYm91bmNlUHJvbWlzZSgodGVybTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnNlYXJjaFJlcXVlc3QodGVybSk7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zZWFyY2hSZXF1ZXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxNb2RhbEFkZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWxBZGQuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbE1vZGFsRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWxFZGl0LmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWxNb2RhbERlbGV0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsTW9kYWxEZWxldGUuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DaGFuZ2VQYWdlKHBhZ2VOdW06IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCByb3dPZmZzZXQgPSBNYXRoLmNlaWwoKHBhZ2VOdW0gLSAxKSAqIHRoaXMuc3RhdGUubGltaXRQZXJQYWdlKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFnZU51bSwgcm93T2Zmc2V0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNsaWNrU2hvd0FkZE1vZGFsKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsQWRkLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1Nob3dFZGl0TW9kYWwoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sIG1vZGVsRm9yRWRpdDogSVBlcnNvbk1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGVsRm9yRWRpdCB9KTtcclxuICAgICAgICB0aGlzLmVsTW9kYWxFZGl0LnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1Nob3dEZWxldGVNb2RhbChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PiwgbW9kZWxGb3JFZGl0OiBJUGVyc29uTW9kZWwpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9kZWxGb3JFZGl0IH0pO1xyXG4gICAgICAgIHRoaXMuZWxNb2RhbERlbGV0ZS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2xpY2tQZXJzb25FZGl0b3JBZGRfX3NhdmVCdG4oZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBlcnNvbkVkaXRvckFkZC5lbEZvcm0uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRSZXF1ZXN0KHRoaXMucGVyc29uRWRpdG9yQWRkLmVsRm9ybS5nZXREYXRhKCkpO1xyXG4gICAgICAgIHRoaXMucGFnaW5nQmFyLnNldExhc3RQYWdlKCk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsQWRkLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAYmluZFxyXG4gICAgb25DbGlja1BlcnNvbkVkaXRvckVkaXRfX3NhdmVCdG4oZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucGVyc29uRWRpdG9yRWRpdC5lbEZvcm0uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnBlcnNvbkVkaXRvckVkaXQuZWxGb3JtLmdldERhdGEoKTtcclxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVJlcXVlc3QoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5lbE1vZGFsRWRpdC5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIG9uQ2xpY2tQZXJzb25FZGl0b3JEZWxldGVfX3NhdmVCdG4oZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZVJlcXVlc3QodGhpcy5zdGF0ZS5tb2RlbEZvckVkaXQuaWQpO1xyXG4gICAgICAgIHRoaXMuZWxNb2RhbERlbGV0ZS5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGJpbmRcclxuICAgIHJlbmRlclJvdyhwZXJzb246IElQZXJzb25Nb2RlbCkge1xyXG4gICAgICAgIHJldHVybiA8dHIga2V5PXtwZXJzb24uaWR9PlxyXG4gICAgICAgICAgICA8dGQ+e3BlcnNvbi5maXJzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPntwZXJzb24ubGFzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIiBvbkNsaWNrPXt4ID0+IHRoaXMub25DbGlja1Nob3dFZGl0TW9kYWwoeCwgcGVyc29uKX0+RWRpdDwvYnV0dG9uPiZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3ggPT4gdGhpcy5vbkNsaWNrU2hvd0RlbGV0ZU1vZGFsKHgsIHBlcnNvbil9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+O1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICByZW5kZXJSb3dzKGRhdGE6IElQZXJzb25Nb2RlbFtdKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgLnNsaWNlKHRoaXMuc3RhdGUucm93T2Zmc2V0LCB0aGlzLnN0YXRlLnJvd09mZnNldCArIHRoaXMuc3RhdGUubGltaXRQZXJQYWdlKVxyXG4gICAgICAgICAgICAubWFwKHggPT4gdGhpcy5yZW5kZXJSb3coeCkpO1xyXG4gICAgfVxyXG5cclxuICAgIEBiaW5kXHJcbiAgICBvbkNoYW5nZVNlYXJjaElucHV0KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLmRlYm91bmNlZFNlYXJjaCh2YWwpO1xyXG4gICAgICAgIHRoaXMucGFnaW5nQmFyLnNldEZpcnN0UGFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxIZWxtZXQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SmF5Y2VlIEdyaWZmaXRoIC0gUG9ydGZvbGlvPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWxtZXQ+XHJcblxyXG4gICAgICAgICAgICA8TG9hZGVyIHNob3c9e3RoaXMucHJvcHMuaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nfSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHkgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIG9uQ2xpY2s9e3RoaXMub25DbGlja1Nob3dBZGRNb2RhbH0+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlNlYXJjaCBmb3IgcGVvcGxlLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBuYW1lPC90aD48dGg+TGFzdCBuYW1lPC90aD48dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKHRoaXMucHJvcHMucGVvcGxlKX1cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICAgICAgICB7LyogQWRkIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxBZGQgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5vbkNsaWNrUGVyc29uRWRpdG9yQWRkX19zYXZlQnRufT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCBwZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVyc29uRWRpdG9yQWRkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc29uRWRpdG9yQWRkLmVtcHR5Rm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkVkaXRvciByZWY9e3ggPT4gdGhpcy5wZXJzb25FZGl0b3JBZGQgPSB4fSBkYXRhPXt7fX0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbENvbXBvbmVudD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBFZGl0IG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxFZGl0ID0geH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM9ezxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMub25DbGlja1BlcnNvbkVkaXRvckVkaXRfX3NhdmVCdG59PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtgRWRpdCBwZXJzb246ICR7dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXQuZmlyc3ROYW1lfSAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0Lmxhc3ROYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJzb25FZGl0b3JFZGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RlbEZvckVkaXQ6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbkVkaXRvciByZWY9e3ggPT4gdGhpcy5wZXJzb25FZGl0b3JFZGl0ID0geH0gZGF0YT17dGhpcy5zdGF0ZS5tb2RlbEZvckVkaXR9IC8+XHJcbiAgICAgICAgICAgIDwvTW9kYWxDb21wb25lbnQ+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVsZXRlIG1vZGFsICovfVxyXG4gICAgICAgICAgICA8TW9kYWxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIHJlZj17eCA9PiB0aGlzLmVsTW9kYWxEZWxldGUgPSB4fVxyXG4gICAgICAgICAgICAgICAgYnV0dG9ucz17PGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIiBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tQZXJzb25FZGl0b3JEZWxldGVfX3NhdmVCdG59PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BEZWxldGUgcGVyc29uOiAke3RoaXMuc3RhdGUubW9kZWxGb3JFZGl0LmZpcnN0TmFtZX0gJHt0aGlzLnN0YXRlLm1vZGVsRm9yRWRpdC5sYXN0TmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxwPkRvIHlvdSByZWFsbHkgd2FudCB0byBkZWxldGUgdGhpcyBwZXJzb24/PC9wPlxyXG4gICAgICAgICAgICA8L01vZGFsQ29tcG9uZW50PlxyXG5cclxuICAgICAgICAgICAgPFBhZ2luZ0JhclxyXG4gICAgICAgICAgICAgICAgcmVmPXt4ID0+IHRoaXMucGFnaW5nQmFyID0geH1cclxuICAgICAgICAgICAgICAgIHRvdGFsUmVzdWx0cz17dGhpcy5wcm9wcy5wZW9wbGUubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgbGltaXRQZXJQYWdlPXt0aGlzLnN0YXRlLmxpbWl0UGVyUGFnZX1cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlPXt0aGlzLnN0YXRlLnBhZ2VOdW19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e3RoaXMub25DaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PjtcclxuICAgIH1cclxufVxyXG5cclxudmFyIGNvbXBvbmVudCA9IGNvbm5lY3QoXHJcbiAgICAoc3RhdGU6IEFwcGxpY2F0aW9uU3RhdGUpID0+IHN0YXRlLnBlcnNvbiwgLy8gU2VsZWN0cyB3aGljaCBzdGF0ZSBwcm9wZXJ0aWVzIGFyZSBtZXJnZWQgaW50byB0aGUgY29tcG9uZW50J3MgcHJvcHMuXHJcbiAgICBQZXJzb25TdG9yZS5hY3Rpb25DcmVhdG9ycyAvLyBTZWxlY3RzIHdoaWNoIGFjdGlvbiBjcmVhdG9ycyBhcmUgbWVyZ2VkIGludG8gdGhlIGNvbXBvbmVudCdzIHByb3BzLlxyXG4pKFBvcnRmb2xpb1BhZ2UgYXMgYW55KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh3aXRoUm91dGVyKGNvbXBvbmVudCBhcyBhbnkpIGFzIGFueSBhcyB0eXBlb2YgUG9ydGZvbGlvUGFnZSkiLCJpbXBvcnQgQXV0aG9yaXplZExheW91dCBmcm9tICdATGF5b3V0cy9BdXRob3JpemVkTGF5b3V0JztcclxuaW1wb3J0IEd1ZXN0TGF5b3V0IGZyb20gXCJATGF5b3V0cy9HdWVzdExheW91dFwiO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gJ0BQYWdlcy9Mb2dpblBhZ2UnO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZSB9IGZyb20gXCJAQ29tcG9uZW50cy9zaGFyZWQvQXBwUm91dGVcIjtcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gJ0BQYWdlcy9Ib21lUGFnZSc7XHJcbmltcG9ydCBQb3J0Zm9saW9QYWdlIGZyb20gJ0BQYWdlcy9Qb3J0Zm9saW9QYWdlJztcclxuaW1wb3J0IEFkbWluUGFnZSBmcm9tICdAUGFnZXMvQWRtaW5QYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSA8U3dpdGNoPlxyXG4gICAgPEFwcFJvdXRlIGxheW91dD17R3Vlc3RMYXlvdXR9IGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2luUGFnZX0gLz5cclxuICAgIDxBcHBSb3V0ZSBsYXlvdXQ9e0d1ZXN0TGF5b3V0fSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZVBhZ2V9IC8+XHJcbiAgICA8QXBwUm91dGUgbGF5b3V0PXtHdWVzdExheW91dH0gZXhhY3QgcGF0aD1cIi9wb3J0Zm9saW9cIiBjb21wb25lbnQ9e1BvcnRmb2xpb1BhZ2V9IC8+XHJcbiAgICA8QXBwUm91dGUgbGF5b3V0PXtBdXRob3JpemVkTGF5b3V0fSBleGFjdCBwYXRoPVwiL2FkbWluXCIgY29tcG9uZW50PXtBZG1pblBhZ2V9IC8+XHJcbjwvU3dpdGNoPjsiLCJpbXBvcnQgeyBJTG9naW5Nb2RlbCB9IGZyb20gXCJATW9kZWxzL0lMb2dpbk1vZGVsXCI7XHJcbmltcG9ydCB7IElTZXJ2aWNlVXNlciB9IGZyb20gXCJATW9kZWxzL0lTZXJ2aWNlVXNlclwiO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCJATW9kZWxzL1Jlc3VsdFwiO1xyXG5pbXBvcnQgeyBTZXJ2aWNlQmFzZSB9IGZyb20gXCIuL1NlcnZpY2VCYXNlXCI7XHJcbmltcG9ydCBHbG9iYWxzIGZyb20gXCJAR2xvYmFsc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudFNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlQmFzZSB7XHJcbiAgICBcclxuICAgIHN0YXRpYyBhc3luYyBsb2dpbihsb2dpbk1vZGVsOiBJTG9naW5Nb2RlbCkgOiBQcm9taXNlPFJlc3VsdDxJU2VydmljZVVzZXI+PiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdEpzb248SVNlcnZpY2VVc2VyPih7XHJcbiAgICAgICAgICAgIHVybDogXCJhcGkvQWNjb3VudC9Mb2dpblwiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBsb2dpbk1vZGVsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICBHbG9iYWxzLnNlcnZpY2VVc2VyID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgbG9nb3V0KCk6IFByb21pc2U8UmVzdWx0PHt9Pj4ge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RKc29uPElTZXJ2aWNlVXNlcj4oe1xyXG4gICAgICAgICAgICB1cmw6IFwiYXBpL0FjY291bnQvTG9nb3V0XCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbHMuc2VydmljZVVzZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNlcnZpY2VCYXNlIH0gZnJvbSBcIkBTZXJ2aWNlcy9TZXJ2aWNlQmFzZVwiO1xyXG5pbXBvcnQgUmVzdWx0IGZyb20gXCJATW9kZWxzL1Jlc3VsdFwiO1xyXG5pbXBvcnQgeyBJUGVyc29uTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JUGVyc29uTW9kZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvblNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlQmFzZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHNlYXJjaCh0ZXJtOiBzdHJpbmcgPSBudWxsKTogUHJvbWlzZTxSZXN1bHQ8SVBlcnNvbk1vZGVsW10+PiB7XHJcbiAgICAgICAgaWYgKHRlcm0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0ZXJtID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdEpzb248SVBlcnNvbk1vZGVsW10+KHtcclxuICAgICAgICAgICAgdXJsOiBgL2FwaS9QZXJzb24vU2VhcmNoP3Rlcm09JHt0ZXJtfWAsXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHVwZGF0ZShtb2RlbDogSVBlcnNvbk1vZGVsKTogUHJvbWlzZTxSZXN1bHQ8e30+PiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdEpzb24oe1xyXG4gICAgICAgICAgICB1cmw6IFwiL2FwaS9QZXJzb25cIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IG1vZGVsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGVsZXRlKGlkOiBudW1iZXIpOiBQcm9taXNlPFJlc3VsdDx7fT4+IHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gYXdhaXQgdGhpcy5yZXF1ZXN0SnNvbih7XHJcbiAgICAgICAgICAgIHVybDogYC9hcGkvUGVyc29uLyR7aWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgYWRkKG1vZGVsOiBJUGVyc29uTW9kZWwpOiBQcm9taXNlPFJlc3VsdDxudW1iZXI+PiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IHRoaXMucmVxdWVzdEpzb248bnVtYmVyPih7XHJcbiAgICAgICAgICAgIHVybDogXCIvYXBpL1BlcnNvbi9BZGRcIixcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogbW9kZWxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVWkgfSBmcm9tIFwiQFVpXCI7XHJcbmltcG9ydCBSZXN1bHQgZnJvbSBcIkBNb2RlbHMvUmVzdWx0XCI7XHJcbmltcG9ydCBBeGlvcywgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdHJhbnNmb3JtVXJsIH0gZnJvbSBcImRvbWFpbi13YWl0XCI7XHJcbmltcG9ydCBqc29uVG9VcmwgZnJvbSBcImpzb24tdG8tdXJsXCI7XHJcbmltcG9ydCB7IGlzTm9kZSB9IGZyb20gXCJAVXRpbHNcIjtcclxuaW1wb3J0IEdsb2JhbHMgZnJvbSBcIkBHbG9iYWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZXF1ZXN0T3B0aW9ucyB7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIGRhdGE/OiBhbnk7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIgfCBcIlBPU1RcIiB8IFwiUFVUXCIgfCBcIlBBVENIXCIgfCBcIkRFTEVURVwiO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTZW5kRm9ybURhdGFPcHRpb25zIHtcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgZGF0YTogRm9ybURhdGE7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiUEFUQ0hcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYmFzZSBjbGFzcyBvZiB0aGUgaXNvbW9ycGhpYyBzZXJ2aWNlLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlcnZpY2VCYXNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2UgcmVxdWVzdCB3aXRoIEpTT04gZGF0YS5cclxuICAgICAqIEBwYXJhbSBvcHRzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVxdWVzdEpzb248VD4ob3B0czogSVJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxSZXN1bHQ8VD4+IHtcclxuXHJcbiAgICAgICAgdmFyIGF4aW9zUmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgb3B0cy51cmwgPSB0cmFuc2Zvcm1Vcmwob3B0cy51cmwpOyAvLyBBbGxvdyByZXF1ZXN0cyBhbHNvIGZvciBOb2RlLlxyXG5cclxuICAgICAgICB2YXIgcHJvY2Vzc1F1ZXJ5ID0gKHVybDogc3RyaW5nLCBkYXRhOiBhbnkpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3VybH0/JHtqc29uVG9VcmwoZGF0YSl9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBheGlvc1JlcXVlc3RDb25maWcgOiBBeGlvc1JlcXVlc3RDb25maWc7XHJcblxyXG4gICAgICAgIGlmIChpc05vZGUoKSkge1xyXG4gICAgICAgICAgICAvLyBVc2VkIGZvciBTU1IgcmVxdWVzdHMgZnJvbSB0aGUgd2ViIHNlcnZlciB0byBOb2RlU2VydmljZXMuXHJcbiAgICAgICAgICAgIGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBDb29raWU6IEdsb2JhbHMuZ2V0RGF0YSgpLnByaXZhdGUuY29va2llXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3B0cy5tZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJHRVRcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLmdldChwcm9jZXNzUXVlcnkob3B0cy51cmwsIG9wdHMuZGF0YSksIGF4aW9zUmVxdWVzdENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucG9zdChvcHRzLnVybCwgb3B0cy5kYXRhLCBheGlvc1JlcXVlc3RDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBVVFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zUmVzdWx0ID0gYXdhaXQgQXhpb3MucHV0KG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zUmVxdWVzdENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUEFUQ0hcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLnBhdGNoKG9wdHMudXJsLCBvcHRzLmRhdGEsIGF4aW9zUmVxdWVzdENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiREVMRVRFXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5kZWxldGUocHJvY2Vzc1F1ZXJ5KG9wdHMudXJsLCBvcHRzLmRhdGEpLCBheGlvc1JlcXVlc3RDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZXN1bHQoYXhpb3NSZXN1bHQuZGF0YS52YWx1ZSwgLi4uYXhpb3NSZXN1bHQuZGF0YS5lcnJvcnMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZXN1bHQobnVsbCwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICBVaS5zaG93RXJyb3JzKC4uLnJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93cyB5b3UgdG8gc2VuZCBmaWxlcyB0byB0aGUgc2VydmVyLlxyXG4gICAgICogQHBhcmFtIG9wdHNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBzZW5kRm9ybURhdGE8VD4ob3B0czogSVNlbmRGb3JtRGF0YU9wdGlvbnMpOiBQcm9taXNlPFJlc3VsdDxUPj4ge1xyXG4gICAgICAgIHZhciBheGlvc1Jlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgICAgIG9wdHMudXJsID0gdHJhbnNmb3JtVXJsKG9wdHMudXJsKTsgLy8gQWxsb3cgcmVxdWVzdHMgYWxzbyBmb3IgTm9kZS5cclxuXHJcbiAgICAgICAgdmFyIGF4aW9zT3B0cyA9IHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3dpdGNoIChvcHRzLm1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBPU1RcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLnBvc3Qob3B0cy51cmwsIG9wdHMuZGF0YSwgYXhpb3NPcHRzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJQVVRcIjpcclxuICAgICAgICAgICAgICAgICAgICBheGlvc1Jlc3VsdCA9IGF3YWl0IEF4aW9zLnB1dChvcHRzLnVybCwgb3B0cy5kYXRhLCBheGlvc09wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlBBVENIXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NSZXN1bHQgPSBhd2FpdCBBeGlvcy5wYXRjaChvcHRzLnVybCwgb3B0cy5kYXRhLCBheGlvc09wdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZXN1bHQoYXhpb3NSZXN1bHQuZGF0YS52YWx1ZSwgLi4uYXhpb3NSZXN1bHQuZGF0YS5lcnJvcnMpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZXN1bHQobnVsbCwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICBVaS5zaG93RXJyb3JzKC4uLnJlc3VsdC5lcnJvcnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElMb2dpbk1vZGVsIH0gZnJvbSBcIkBNb2RlbHMvSUxvZ2luTW9kZWxcIjtcclxuaW1wb3J0IHsgSVNlcnZpY2VVc2VyIH0gZnJvbSBcIkBNb2RlbHMvSVNlcnZpY2VVc2VyXCI7XHJcbmltcG9ydCB7IGNsb25lIH0gZnJvbSBcIkBVdGlsc1wiO1xyXG5pbXBvcnQgeyBBY3Rpb24sIFJlZHVjZXIgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IEFjY291bnRTZXJ2aWNlIGZyb20gXCJAU2VydmljZXMvQWNjb3VudFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb24gfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IG1vZHVsZSBMb2dpblN0b3JlIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XHJcbiAgICAgICAgaW5kaWNhdG9yczoge1xyXG4gICAgICAgICAgICBvcGVyYXRpb25Mb2FkaW5nOiBib29sZWFuO1xyXG4gICAgICAgICAgICBsb2dpblN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgZW51bSBBY3Rpb25zIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBZb3UgbmVlZCB0byBoYXZlIHRoZSBpbml0aWFsIHN0YXRlIHRvXHJcbiAgICAgICAgICogcmVzZXQgdGhlIGluZGljYXRvcnMgKGUuZy4gbG9naW5TdWNjZXNzKVxyXG4gICAgICAgICAqIHRoYXQgY2FsbCByZWRpcmVjdCBvciBhbnkgb3RoZXIgYWN0aW9ucy5cclxuICAgICAgICAgKiBJdCBtdXN0IGJlIGNhbGxlZCBpbiBtZXRob2QgJ2NvbXBvbmVudERpZE1vdW50J1xyXG4gICAgICAgICAqIG9mIGEgY29tcG9uZW50LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIEluaXQgPSBcIkxPR0lOX0lOSVRcIixcclxuICAgICAgICBSZXF1ZXN0ID0gXCJMT0dJTl9SRVFVRVNUXCIsXHJcbiAgICAgICAgU3VjY2VzcyA9IFwiTE9HSU5fU1VDQ0VTU1wiLFxyXG4gICAgICAgIEZhaWx1cmUgPSBcIkxPR0lOX0ZBSUxVUkVcIlxyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJSW5pdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5Jbml0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJUmVxdWVzdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5SZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJU3VjY2VzcyB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5TdWNjZXNzO1xyXG4gICAgICAgIHBheWxvYWQ6IElTZXJ2aWNlVXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBpbnRlcmZhY2UgSUZhaWx1cmUge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuRmFpbHVyZTtcclxuICAgIH1cclxuXHJcbiAgICB0eXBlIEtub3duQWN0aW9uID0gSUluaXQgfCBJUmVxdWVzdCB8IElTdWNjZXNzIHwgSUZhaWx1cmU7XHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xyXG4gICAgICAgIGluaXQ6ICgpOiBBcHBUaHVua0FjdGlvbjxLbm93bkFjdGlvbj4gPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuSW5pdCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW5SZXF1ZXN0OiAobW9kZWw6IElMb2dpbk1vZGVsKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5SZXF1ZXN0IH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IEFjY291bnRTZXJ2aWNlLmxvZ2luKG1vZGVsKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5oYXNFcnJvcnMpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5GYWlsdXJlIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuU3VjY2VzcywgcGF5bG9hZDogcmVzdWx0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZTogSVN0YXRlID0ge1xyXG4gICAgICAgIGluZGljYXRvcnM6IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvZ2luU3VjY2VzczogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPElTdGF0ZT4gPSAoY3VycmVudFN0YXRlOiBJU3RhdGUsIGluY29taW5nQWN0aW9uOiBBY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBpbmNvbWluZ0FjdGlvbiBhcyBLbm93bkFjdGlvbjtcclxuXHJcbiAgICAgICAgdmFyIGNsb25lSW5kaWNhdG9ycyA9ICgpID0+IGNsb25lKGN1cnJlbnRTdGF0ZS5pbmRpY2F0b3JzKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuSW5pdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5SZXF1ZXN0OlxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGljYXRvcnMgPSBjbG9uZUluZGljYXRvcnMoKTtcclxuICAgICAgICAgICAgICAgIGluZGljYXRvcnMub3BlcmF0aW9uTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLlN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kaWNhdG9ycyA9IGNsb25lSW5kaWNhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLmxvZ2luU3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLkZhaWx1cmU6XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kaWNhdG9ycyA9IGNsb25lSW5kaWNhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMgfTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSBndWFyYW50ZWVzIHRoYXQgZXZlcnkgYWN0aW9uIGluIHRoZSBLbm93bkFjdGlvbiB1bmlvbiBoYXMgYmVlbiBjb3ZlcmVkIGJ5IGEgY2FzZSBhYm92ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhoYXVzdGl2ZUNoZWNrOiBuZXZlciA9IGFjdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjdXJyZW50U3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY2xvbmUgfSBmcm9tIFwiQFV0aWxzXCI7XHJcbmltcG9ydCB7IEFjdGlvbiwgUmVkdWNlciB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBBcHBUaHVua0FjdGlvbiB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCBQZXJzb25TZXJ2aWNlIGZyb20gXCJAU2VydmljZXMvUGVyc29uU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJUGVyc29uTW9kZWwgfSBmcm9tIFwiQE1vZGVscy9JUGVyc29uTW9kZWxcIjtcclxuaW1wb3J0IHsgd2FpdCB9IGZyb20gXCJkb21haW4td2FpdFwiO1xyXG5cclxuZXhwb3J0IG1vZHVsZSBQZXJzb25TdG9yZSB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xyXG4gICAgICAgIHBlb3BsZTogSVBlcnNvbk1vZGVsW10sXHJcbiAgICAgICAgaW5kaWNhdG9yczoge1xyXG4gICAgICAgICAgICBvcGVyYXRpb25Mb2FkaW5nOiBib29sZWFuO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGVudW0gQWN0aW9ucyB7XHJcbiAgICAgICAgU2VhcmNoUmVxdWVzdCA9IFwiUEVSU09OX1NFQVJDSF9SRVFVRVNUXCIsXHJcbiAgICAgICAgU2VhcmNoUmVzcG9uc2UgPSBcIlBFUlNPTl9TRUFSQ0hfUkVTUE9OU0VcIixcclxuICAgICAgICBBZGRSZXF1ZXN0ID0gXCJQRVJTT05fQUREX1JFUVVFU1RcIixcclxuICAgICAgICBBZGRSZXNwb25zZSA9IFwiUEVSU09OX0FERF9SRVNQT05TRVwiLFxyXG4gICAgICAgIFVwZGF0ZVJlcXVlc3QgPSBcIlBFUlNPTl9VUERBVEVfUkVRVUVTVFwiLFxyXG4gICAgICAgIFVwZGF0ZVJlc3BvbnNlID0gXCJQRVJTT05fVVBEQVRFX1JFU1BPTlNFXCIsXHJcbiAgICAgICAgRGVsZXRlUmVxdWVzdCA9IFwiUEVSU09OX0RFTEVURV9SRVFVRVNUXCIsXHJcbiAgICAgICAgRGVsZXRlUmVzcG9uc2UgPSBcIlBFUlNPTl9ERUxFVEVfUkVTUE9OU0VcIlxyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJR2V0QWxsUmVxdWVzdCB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5TZWFyY2hSZXF1ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGludGVyZmFjZSBJR2V0QWxsUmVzcG9uc2Uge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbnMuU2VhcmNoUmVzcG9uc2U7XHJcbiAgICAgICAgcGF5bG9hZDogSVBlcnNvbk1vZGVsW107XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElBZGRSZXF1ZXN0IHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkFkZFJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElBZGRSZXNwb25zZSB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5BZGRSZXNwb25zZTtcclxuICAgICAgICBwYXlsb2FkOiBJUGVyc29uTW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElVcGRhdGVSZXF1ZXN0IHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLlVwZGF0ZVJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElVcGRhdGVSZXNwb25zZSB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5VcGRhdGVSZXNwb25zZTtcclxuICAgICAgICBwYXlsb2FkOiBJUGVyc29uTW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElEZWxldGVSZXF1ZXN0IHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25zLkRlbGV0ZVJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIElEZWxldGVSZXNwb25zZSB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9ucy5EZWxldGVSZXNwb25zZTtcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgS25vd25BY3Rpb24gPVxyXG4gICAgICAgIElHZXRBbGxSZXF1ZXN0IHwgSUdldEFsbFJlc3BvbnNlIHxcclxuICAgICAgICBJQWRkUmVxdWVzdCB8IElBZGRSZXNwb25zZSB8XHJcbiAgICAgICAgSVVwZGF0ZVJlcXVlc3QgfCBJVXBkYXRlUmVzcG9uc2UgfFxyXG4gICAgICAgIElEZWxldGVSZXF1ZXN0IHwgSURlbGV0ZVJlc3BvbnNlO1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcclxuICAgICAgICBzZWFyY2hSZXF1ZXN0OiAodGVybT86IHN0cmluZyk6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhd2FpdCB3YWl0KGFzeW5jICh0cmFuc2Zvcm1VcmwpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gV2FpdCBmb3Igc2VydmVyIHByZXJlbmRlcmluZy5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5TZWFyY2hSZXF1ZXN0IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBQZXJzb25TZXJ2aWNlLnNlYXJjaCh0ZXJtKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5TZWFyY2hSZXNwb25zZSwgcGF5bG9hZDogcmVzdWx0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZFJlcXVlc3Q6IChtb2RlbDogSVBlcnNvbk1vZGVsKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5BZGRSZXF1ZXN0IH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IFBlcnNvblNlcnZpY2UuYWRkKG1vZGVsKTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC5pZCA9IHJlc3VsdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5BZGRSZXNwb25zZSwgcGF5bG9hZDogbW9kZWwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZVJlcXVlc3Q6IChtb2RlbDogSVBlcnNvbk1vZGVsKTogQXBwVGh1bmtBY3Rpb248S25vd25BY3Rpb24+ID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9ucy5VcGRhdGVSZXF1ZXN0IH0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGF3YWl0IFBlcnNvblNlcnZpY2UudXBkYXRlKG1vZGVsKTtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzRXJyb3JzKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuVXBkYXRlUmVzcG9uc2UsIHBheWxvYWQ6IG1vZGVsIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVSZXF1ZXN0OiAoaWQ6IG51bWJlcik6IEFwcFRodW5rQWN0aW9uPEtub3duQWN0aW9uPiA9PiBhc3luYyAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvbnMuRGVsZXRlUmVxdWVzdCB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBhd2FpdCBQZXJzb25TZXJ2aWNlLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0Lmhhc0Vycm9ycykge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25zLkRlbGV0ZVJlc3BvbnNlLCBpZCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGU6IElTdGF0ZSA9IHtcclxuICAgICAgICBwZW9wbGU6IFtdLFxyXG4gICAgICAgIGluZGljYXRvcnM6IHtcclxuICAgICAgICAgICAgb3BlcmF0aW9uTG9hZGluZzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBjb25zdCByZWR1Y2VyOiBSZWR1Y2VyPElTdGF0ZT4gPSAoY3VycmVudFN0YXRlOiBJU3RhdGUsIGluY29taW5nQWN0aW9uOiBBY3Rpb24pID0+IHtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBpbmNvbWluZ0FjdGlvbiBhcyBLbm93bkFjdGlvbjtcclxuXHJcbiAgICAgICAgdmFyIGNsb25lSW5kaWNhdG9ycyA9ICgpID0+IGNsb25lKGN1cnJlbnRTdGF0ZS5pbmRpY2F0b3JzKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuU2VhcmNoUmVxdWVzdDpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5TZWFyY2hSZXNwb25zZTpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycywgcGVvcGxlOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuVXBkYXRlUmVxdWVzdDpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5VcGRhdGVSZXNwb25zZTpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gY2xvbmUoY3VycmVudFN0YXRlLnBlb3BsZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbVRvVXBkYXRlID0gZGF0YS5maWx0ZXIoeCA9PiB4LmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClbMF07XHJcbiAgICAgICAgICAgICAgICBpdGVtVG9VcGRhdGUuZmlyc3ROYW1lID0gYWN0aW9uLnBheWxvYWQuZmlyc3ROYW1lO1xyXG4gICAgICAgICAgICAgICAgaXRlbVRvVXBkYXRlLmxhc3ROYW1lID0gYWN0aW9uLnBheWxvYWQubGFzdE5hbWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMsIHBlb3BsZTogZGF0YSB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuQWRkUmVxdWVzdDpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzIH07XHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9ucy5BZGRSZXNwb25zZTpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRpY2F0b3JzID0gY2xvbmVJbmRpY2F0b3JzKCk7XHJcbiAgICAgICAgICAgICAgICBpbmRpY2F0b3JzLm9wZXJhdGlvbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gY2xvbmUoY3VycmVudFN0YXRlLnBlb3BsZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudFN0YXRlLCBpbmRpY2F0b3JzLCBwZW9wbGU6IGRhdGEgfTtcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25zLkRlbGV0ZVJlcXVlc3Q6XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kaWNhdG9ycyA9IGNsb25lSW5kaWNhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLmN1cnJlbnRTdGF0ZSwgaW5kaWNhdG9ycyB9O1xyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbnMuRGVsZXRlUmVzcG9uc2U6XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kaWNhdG9ycyA9IGNsb25lSW5kaWNhdG9ycygpO1xyXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9ycy5vcGVyYXRpb25Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IGNsb25lKGN1cnJlbnRTdGF0ZS5wZW9wbGUpLmZpbHRlcih4ID0+IHguaWQgIT09IGFjdGlvbi5pZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5jdXJyZW50U3RhdGUsIGluZGljYXRvcnMsIHBlb3BsZTogZGF0YSB9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBsaW5lIGd1YXJhbnRlZXMgdGhhdCBldmVyeSBhY3Rpb24gaW4gdGhlIEtub3duQWN0aW9uIHVuaW9uIGhhcyBiZWVuIGNvdmVyZWQgYnkgYSBjYXNlIGFib3ZlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBleGhhdXN0aXZlQ2hlY2s6IG5ldmVyID0gYWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRTdGF0ZSB8fCBpbml0aWFsU3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBMb2dpblN0b3JlIH0gZnJvbSBcIkBTdG9yZS9Mb2dpblN0b3JlXCI7XHJcbmltcG9ydCB7IFBlcnNvblN0b3JlIH0gZnJvbSBcIkBTdG9yZS9QZXJzb25TdG9yZVwiO1xyXG5cclxuLy8gVGhlIHRvcC1sZXZlbCBzdGF0ZSBvYmplY3RcclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAgIGxvZ2luOiBMb2dpblN0b3JlLklTdGF0ZTtcclxuICAgIHBlcnNvbjogUGVyc29uU3RvcmUuSVN0YXRlO1xyXG59XHJcblxyXG4vLyBXaGVuZXZlciBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCwgUmVkdXggd2lsbCB1cGRhdGUgZWFjaCB0b3AtbGV2ZWwgYXBwbGljYXRpb24gc3RhdGUgcHJvcGVydHkgdXNpbmdcclxuLy8gdGhlIHJlZHVjZXIgd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZS4gSXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgbmFtZXMgbWF0Y2ggZXhhY3RseSwgYW5kIHRoYXQgdGhlIHJlZHVjZXJcclxuLy8gYWN0cyBvbiB0aGUgY29ycmVzcG9uZGluZyBBcHBsaWNhdGlvblN0YXRlIHByb3BlcnR5IHR5cGUuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcclxuICAgIGxvZ2luOiBMb2dpblN0b3JlLnJlZHVjZXIsXHJcbiAgICBwZXJzb246IFBlcnNvblN0b3JlLnJlZHVjZXJcclxufTtcclxuXHJcbi8vIFRoaXMgdHlwZSBjYW4gYmUgdXNlZCBhcyBhIGhpbnQgb24gYWN0aW9uIGNyZWF0b3JzIHNvIHRoYXQgaXRzICdkaXNwYXRjaCcgYW5kICdnZXRTdGF0ZScgcGFyYW1zIGFyZVxyXG4vLyBjb3JyZWN0bHkgdHlwZWQgdG8gbWF0Y2ggeW91ciBzdG9yZS5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbjxUQWN0aW9uPiB7XHJcbiAgICAoZGlzcGF0Y2g6IChhY3Rpb246IFRBY3Rpb24pID0+IHZvaWQsIGdldFN0YXRlOiAoKSA9PiBBcHBsaWNhdGlvblN0YXRlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBUaHVua0FjdGlvbkFzeW5jPFRBY3Rpb24sIFRSZXN1bHQ+IHtcclxuICAgIChkaXNwYXRjaDogKGFjdGlvbjogVEFjdGlvbikgPT4gdm9pZCwgZ2V0U3RhdGU6ICgpID0+IEFwcGxpY2F0aW9uU3RhdGUpIDogUHJvbWlzZTxUUmVzdWx0PlxyXG59IiwiaW1wb3J0IHsgQXBwVGh1bmtBY3Rpb25Bc3luYyB9IGZyb20gXCJAU3RvcmUvaW5kZXhcIjtcclxuXHJcbmRlY2xhcmUgdmFyIHByb2Nlc3M6IGFueTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZTxUPihvYmplY3Q6IFQpOiBUIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvbWlzZUZyb21BY3Rpb248VCwgVj4oYXN5bmNBY3Rpb25DcmVhdG9yOiBBcHBUaHVua0FjdGlvbkFzeW5jPFQsIFY+KTogUHJvbWlzZTxWPiB7XHJcbiAgICByZXR1cm4gKGFzeW5jQWN0aW9uQ3JlYXRvciBhcyBhbnkpIGFzIFByb21pc2U8Vj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJcyBzZXJ2ZXIgcHJlcmVuZGVyaW5nIGJ5IE5vZGUuanMuXHJcbiAqIFRoZXJlIGNhbid0IGJlIGFueSBET006IHdpbmRvdywgZG9jdW1lbnQsIGV0Yy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmIHByb2Nlc3MudmVyc2lvbnMgJiYgISFwcm9jZXNzLnZlcnNpb25zLm5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdEVtcHR5KG9iaik6IGJvb2xlYW4ge1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eUZvcm0oZm9ybTogSFRNTEZvcm1FbGVtZW50KTogdm9pZCB7XHJcbiAgICB2YXIgaW5wdXRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKSk7XHJcbiAgICBpbnB1dHMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICB2YXIgaW5wdXRUeXBlID0geC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xyXG4gICAgICAgIGlmIChpbnB1dFR5cGUgPT09IFwiY2hlY2tib3hcIiB8fCBpbnB1dFR5cGUgPT09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAoeCBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAoeCBhcyBhbnkpLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSg0NzYpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRGVib3VuY2VDYWNoZSA9IGV4cG9ydHMub25seVJlc29sdmVzTGFzdCA9IGV4cG9ydHMuZGVib3VuY2UgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfZGVib3VuY2VQcm9taXNlID0gcmVxdWlyZSgnZGVib3VuY2UtcHJvbWlzZScpO1xuXG52YXIgX2RlYm91bmNlUHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWJvdW5jZVByb21pc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IGVsc2UgeyByZXR1cm4gQXJyYXkuZnJvbShhcnIpOyB9IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBXZSB1c2UgRGVib3VuY2VQcm9taXNlIGFzIGEgZGVwZW5kZW5jeSBhcyBpdCBkb2VzIGEgZ3JlYXQgbG93LWxldmVsIGpvYlxuLy8gVGhlIGJlaGF2aW9yIG9mIHRoZSBsaWIgaXMgdG8gcmV0dXJuIHRoZSBzYW1lIHByb21pc2UgZm9yIGFsbCBmdW5jdGlvbiBjYWxsc1xudmFyIGRlYm91bmNlID0gZXhwb3J0cy5kZWJvdW5jZSA9IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgcmV0dXJuICgwLCBfZGVib3VuY2VQcm9taXNlMi5kZWZhdWx0KShmdW5jLCB3YWl0LCBvcHRpb25zKTtcbn07XG5cbi8vIEdpdmVuIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHByb21pc2VzLCB3cmFwIGl0IHNvIHRoYXQgb25seSB0aGUgcHJvbWlzZSByZXR1cm5lZCBmcm9tIGxhc3QgY2FsbCB3aWxsIGFjdHVhbGx5IHJlc29sdmVcbi8vIFRoaXMgaXMgdXNlZnVsIHRvIGlnbm9yZSBmb3JtZXIgYXN5bmMgcmVzdWx0cyBhbmQgaGFuZGxlIGNvbmN1cnJlbmN5IGlzc3Vlc1xudmFyIG9ubHlSZXNvbHZlc0xhc3QgPSBleHBvcnRzLm9ubHlSZXNvbHZlc0xhc3QgPSBmdW5jdGlvbiBvbmx5UmVzb2x2ZXNMYXN0KGFzeW5jRnVuY3Rpb24pIHtcbiAgLy8gSW5zcGlyZWQgZnJvbSBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxNS8xMi8xNi9pc21vdW50ZWQtYW50aXBhdHRlcm4uaHRtbFxuICB2YXIgbWFrZUNhbmNlbGFibGUgPSBmdW5jdGlvbiBtYWtlQ2FuY2VsYWJsZShwcm9taXNlKSB7XG4gICAgdmFyIGhhc0NhbmNlbGVkXyA9IGZhbHNlO1xuICAgIHZhciB3cmFwcGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHJldHVybiBoYXNDYW5jZWxlZF8gPyB1bmRlZmluZWQgOiByZXNvbHZlKHZhbCk7XG4gICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGhhc0NhbmNlbGVkXyA/IHVuZGVmaW5lZCA6IHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvbWlzZTogd3JhcHBlZFByb21pc2UsXG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgaGFzQ2FuY2VsZWRfID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBjYW5jZWxQcmV2aW91cyA9IHZvaWQgMDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjYW5jZWxQcmV2aW91cyAmJiBjYW5jZWxQcmV2aW91cygpO1xuXG4gICAgdmFyIF9tYWtlQ2FuY2VsYWJsZSA9IG1ha2VDYW5jZWxhYmxlKGFzeW5jRnVuY3Rpb24uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKSxcbiAgICAgICAgcHJvbWlzZSA9IF9tYWtlQ2FuY2VsYWJsZS5wcm9taXNlLFxuICAgICAgICBjYW5jZWwgPSBfbWFrZUNhbmNlbGFibGUuY2FuY2VsO1xuXG4gICAgY2FuY2VsUHJldmlvdXMgPSBjYW5jZWw7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG59O1xuXG4vLyBXZSBjcmVhdGUgYSBkZWJvdW5jaW5nIGZ1bmN0aW9uIGNhY2hlLCBiZWNhdXNlIHdoZW4gd3JhcHBpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLFxuLy8gd2UgbWF5IGFjdHVhbGx5IHdhbnQgdG8gcm91dGUgdGhlIGZ1bmN0aW9uIGNhbGwgdG8gZGlmZmVyZW50IGRlYm91bmNlZCBmdW5jdGlvbnMgZGVwZW5kaW5nIGZ1bmN0aW9uIHBhYW1ldGVyc1xuXG52YXIgRGVib3VuY2VDYWNoZSA9IGV4cG9ydHMuRGVib3VuY2VDYWNoZSA9IGZ1bmN0aW9uIERlYm91bmNlQ2FjaGUoKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERlYm91bmNlQ2FjaGUpO1xuXG4gIHRoaXMuZ2V0RGVib3VuY2VkRnVuY3Rpb24gPSBmdW5jdGlvbiAoZnVuYywgd2FpdCwgb3B0aW9ucywgYXJncykge1xuICAgIHZhciBrZXlPcHRpb25zID0gb3B0aW9ucy5rZXksXG4gICAgICAgIG9ubHlSZXNvbHZlc0xhc3RPcHRpb24gPSBvcHRpb25zLm9ubHlSZXNvbHZlc0xhc3QsXG4gICAgICAgIG90aGVyT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvcHRpb25zLCBbJ2tleScsICdvbmx5UmVzb2x2ZXNMYXN0J10pO1xuXG4gICAgdmFyIGtleSA9IGtleU9wdGlvbnMuYXBwbHkodW5kZWZpbmVkLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgIC8vIElmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gZG9lcyBub3QgZXhpc3QgZm9yIHRoaXMga2V5LCB3ZSBjcmVhdGUgb25lIG9uIHRoZSBmbHkgYW5kIHJldHVybiBpdFxuICAgIGlmICghX3RoaXMuZGVib3VuY2VDYWNoZVtrZXldKSB7XG4gICAgICB2YXIgZGVib3VuY2VkRnVuYyA9IGRlYm91bmNlKGZ1bmMsIHdhaXQsIG90aGVyT3B0aW9ucyk7XG4gICAgICBpZiAob25seVJlc29sdmVzTGFzdE9wdGlvbikge1xuICAgICAgICBkZWJvdW5jZWRGdW5jID0gb25seVJlc29sdmVzTGFzdChkZWJvdW5jZWRGdW5jKTtcbiAgICAgIH1cbiAgICAgIF90aGlzLmRlYm91bmNlQ2FjaGVba2V5XSA9IGRlYm91bmNlZEZ1bmM7XG4gICAgfVxuICAgIHJldHVybiBfdGhpcy5kZWJvdW5jZUNhY2hlW2tleV07XG4gIH07XG5cbiAgdGhpcy5kZWJvdW5jZUNhY2hlID0ge307XG59O1xuXG52YXIgRGVmYXVsdE9wdGlvbnMgPSB7XG4gIC8vIEJ5IGRlZmF1bHQsIHRoZSBrZXkgaXMgbnVsbCwgd2hpY2ggbWVhbnMgdGhhdCBhbGwgdGhlIGZ1bmN0aW9uIGNhbGxzXG4gIC8vIHdpbGwgc2hhcmUgdGhlIHNhbWUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gIC8vIFByb3ZpZGluZyBhIGtleSBmdW5jdGlvbiBwZXJtaXQgdG8gdXNlIHRoZSBjYWxsIGFyZ3VtZW50c1xuICAvLyBhbmQgcm91dGUgdG8gYSBkaXN0aW5jdCBkZWJvdW5jZWQgZnVuY3Rpb25cbiAga2V5OiBmdW5jdGlvbiBrZXkoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0sXG5cbiAgLy8gQnkgZGVmYXVsdCwgYSBkZWJvdW5jZWQgZnVuY3Rpb24gd2lsbCBvbmx5IHJlc29sdmVcbiAgLy8gdGhlIGxhc3QgcHJvbWlzZSBpdCByZXR1cm5lZFxuICAvLyBGb3JtZXIgY2FsbHMgd2lsbCBzdGF5IHVucmVzb2x2ZWQsIHNvIHRoYXQgeW91IGRvbid0IGhhdmVcbiAgLy8gdG8gaGFuZGxlIGNvbmN1cnJlbmN5IGlzc3VlcyBpbiB5b3VyIGNvZGVcbiAgb25seVJlc29sdmVzTGFzdDogdHJ1ZVxufTtcblxuZnVuY3Rpb24gQXdlc29tZURlYm91bmNlUHJvbWlzZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBmaW5hbE9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgRGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICB2YXIgZGVib3VuY2VDYWNoZSA9IG5ldyBEZWJvdW5jZUNhY2hlKCk7XG4gIHJldHVybiBmdW5jdGlvbiBBd2Vzb21lRGVib3VuY2VQcm9taXNlV3JhcHBlcigpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgZGVib3VuY2VkRm4gPSBkZWJvdW5jZUNhY2hlLmdldERlYm91bmNlZEZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGZpbmFsT3B0aW9ucywgYXJncyk7XG4gICAgcmV0dXJuIGRlYm91bmNlZEZuLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gIH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF3ZXNvbWVEZWJvdW5jZVByb21pc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMTk1KTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25zdGFudHM7XG4oZnVuY3Rpb24gKGNvbnN0YW50cykge1xuICAgIGNvbnN0YW50cy50eXBlT2ZGdW5jdGlvbiA9ICdmdW5jdGlvbic7XG4gICAgY29uc3RhbnRzLmJvb2xUcnVlID0gdHJ1ZTtcbn0pKGNvbnN0YW50cyB8fCAoY29uc3RhbnRzID0ge30pKTtcbmZ1bmN0aW9uIGJpbmQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikge1xuICAgIGlmICghZGVzY3JpcHRvciB8fCAodHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgIT09IGNvbnN0YW50cy50eXBlT2ZGdW5jdGlvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9ubHkgbWV0aG9kcyBjYW4gYmUgZGVjb3JhdGVkIHdpdGggQGJpbmQuIDxcIiArIHByb3BlcnR5S2V5ICsgXCI+IGlzIG5vdCBhIG1ldGhvZCFcIik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogY29uc3RhbnRzLmJvb2xUcnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBib3VuZCA9IGRlc2NyaXB0b3IudmFsdWUuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIC8vIENyZWRpdHMgdG8gaHR0cHM6Ly9naXRodWIuY29tL2FuZHJleXBvcHAvYXV0b2JpbmQtZGVjb3JhdG9yIGZvciBtZW1vaXppbmcgdGhlIHJlc3VsdCBvZiBiaW5kIGFnYWluc3QgYSBzeW1ib2wgb24gdGhlIGluc3RhbmNlLlxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5S2V5LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGJvdW5kLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogY29uc3RhbnRzLmJvb2xUcnVlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBjb25zdGFudHMuYm9vbFRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuYmluZCA9IGJpbmQ7XG5leHBvcnRzLmRlZmF1bHQgPSBiaW5kO1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKDI1MSk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKDI2Mik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2d1ZCA9IHJlcXVpcmUoJ2d1ZCcpO1xuXG52YXIgX2d1ZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ndWQpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCdmYmpzL2xpYi93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTUFYX1NJR05FRF8zMV9CSVRfSU5UID0gMTA3Mzc0MTgyMztcblxuLy8gSW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbmZ1bmN0aW9uIG9iamVjdElzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudEVtaXR0ZXIodmFsdWUpIHtcbiAgdmFyIGhhbmRsZXJzID0gW107XG4gIHJldHVybiB7XG4gICAgb246IGZ1bmN0aW9uIG9uKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfSxcbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVycyA9IGhhbmRsZXJzLmZpbHRlcihmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gaCAhPT0gaGFuZGxlcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChuZXdWYWx1ZSwgY2hhbmdlZEJpdHMpIHtcbiAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyKHZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSZWFjdENvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICB2YXIgX1Byb3ZpZGVyJGNoaWxkQ29udGV4LCBfQ29uc3VtZXIkY29udGV4dFR5cGU7XG5cbiAgdmFyIGNvbnRleHRQcm9wID0gJ19fY3JlYXRlLXJlYWN0LWNvbnRleHQtJyArICgwLCBfZ3VkMi5kZWZhdWx0KSgpICsgJ19fJztcblxuICB2YXIgUHJvdmlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm92aWRlcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5lbWl0dGVyID0gY3JlYXRlRXZlbnRFbWl0dGVyKF90aGlzLnByb3BzLnZhbHVlKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW2NvbnRleHRQcm9wXSA9IHRoaXMuZW1pdHRlciwgX3JlZjtcbiAgICB9O1xuXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBuZXh0UHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBjaGFuZ2VkQml0cyA9IHZvaWQgMDtcblxuICAgICAgICBpZiAob2JqZWN0SXMob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gMDsgLy8gTm8gY2hhbmdlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicgPyBjYWxjdWxhdGVDaGFuZ2VkQml0cyhvbGRWYWx1ZSwgbmV3VmFsdWUpIDogTUFYX1NJR05FRF8zMV9CSVRfSU5UO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKChjaGFuZ2VkQml0cyAmIE1BWF9TSUdORURfMzFfQklUX0lOVCkgPT09IGNoYW5nZWRCaXRzLCAnY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IEV4cGVjdGVkIHRoZSByZXR1cm4gdmFsdWUgdG8gYmUgYSAnICsgJzMxLWJpdCBpbnRlZ2VyLiBJbnN0ZWFkIHJlY2VpdmVkOiAlcycsIGNoYW5nZWRCaXRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGFuZ2VkQml0cyB8PSAwO1xuXG4gICAgICAgICAgaWYgKGNoYW5nZWRCaXRzICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuc2V0KG5leHRQcm9wcy52YWx1ZSwgY2hhbmdlZEJpdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfTtcblxuICAgIHJldHVybiBQcm92aWRlcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IChfUHJvdmlkZXIkY2hpbGRDb250ZXggPSB7fSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W2NvbnRleHRQcm9wXSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsIF9Qcm92aWRlciRjaGlsZENvbnRleCk7XG5cbiAgdmFyIENvbnN1bWVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzKENvbnN1bWVyLCBfQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBDb25zdW1lcigpIHtcbiAgICAgIHZhciBfdGVtcDIsIF90aGlzMiwgX3JldDI7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25zdW1lcik7XG5cbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQyID0gKF90ZW1wMiA9IChfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50Mi5jYWxsLmFwcGx5KF9Db21wb25lbnQyLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzMiksIF90aGlzMi5zdGF0ZSA9IHtcbiAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpXG4gICAgICB9LCBfdGhpczIub25VcGRhdGUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGNoYW5nZWRCaXRzKSB7XG4gICAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBfdGhpczIub2JzZXJ2ZWRCaXRzIHwgMDtcbiAgICAgICAgaWYgKChvYnNlcnZlZEJpdHMgJiBjaGFuZ2VkQml0cykgIT09IDApIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoeyB2YWx1ZTogX3RoaXMyLmdldFZhbHVlKCkgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIF90ZW1wMiksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzMiwgX3JldDIpO1xuICAgIH1cblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSBuZXh0UHJvcHMub2JzZXJ2ZWRCaXRzO1xuXG4gICAgICB0aGlzLm9ic2VydmVkQml0cyA9IG9ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkIHx8IG9ic2VydmVkQml0cyA9PT0gbnVsbCA/IE1BWF9TSUdORURfMzFfQklUX0lOVCAvLyBTdWJzY3JpYmUgdG8gYWxsIGNoYW5nZXMgYnkgZGVmYXVsdFxuICAgICAgOiBvYnNlcnZlZEJpdHM7XG4gICAgfTtcblxuICAgIENvbnN1bWVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5vbih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICAgIHZhciBvYnNlcnZlZEJpdHMgPSB0aGlzLnByb3BzLm9ic2VydmVkQml0cztcblxuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgLy8gU3Vic2NyaWJlIHRvIGFsbCBjaGFuZ2VzIGJ5IGRlZmF1bHRcbiAgICAgIDogb2JzZXJ2ZWRCaXRzO1xuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub2ZmKHRoaXMub25VcGRhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb25zdW1lci5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRbY29udGV4dFByb3BdLmdldCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29uc3VtZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBvbmx5Q2hpbGQodGhpcy5wcm9wcy5jaGlsZHJlbikodGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBDb25zdW1lcjtcbiAgfShfcmVhY3QuQ29tcG9uZW50KTtcblxuICBDb25zdW1lci5jb250ZXh0VHlwZXMgPSAoX0NvbnN1bWVyJGNvbnRleHRUeXBlID0ge30sIF9Db25zdW1lciRjb250ZXh0VHlwZVtjb250ZXh0UHJvcF0gPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlKTtcblxuXG4gIHJldHVybiB7XG4gICAgUHJvdmlkZXI6IFByb3ZpZGVyLFxuICAgIENvbnN1bWVyOiBDb25zdW1lclxuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVSZWFjdENvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxudmFyIF9pbXBsZW1lbnRhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbXBsZW1lbnRhdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDb250ZXh0IHx8IF9pbXBsZW1lbnRhdGlvbjIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4vKiBnbG9iYWwgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0ICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHdhaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICB2YXIgbGFzdENhbGxBdCA9IHZvaWQgMDtcbiAgdmFyIGRlZmVycmVkID0gdm9pZCAwO1xuICB2YXIgdGltZXIgPSB2b2lkIDA7XG4gIHZhciBwZW5kaW5nQXJncyA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciBjdXJyZW50V2FpdCA9IGdldFdhaXQod2FpdCk7XG4gICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICB2YXIgaXNDb2xkID0gIWxhc3RDYWxsQXQgfHwgY3VycmVudFRpbWUgLSBsYXN0Q2FsbEF0ID4gY3VycmVudFdhaXQ7XG5cbiAgICBsYXN0Q2FsbEF0ID0gY3VycmVudFRpbWU7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoaXNDb2xkICYmIG9wdGlvbnMubGVhZGluZykge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuYWNjdW11bGF0ZSA/IFByb21pc2UucmVzb2x2ZShmbi5jYWxsKHRoaXMsIFthcmdzXSkpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0WzBdO1xuICAgICAgfSkgOiBQcm9taXNlLnJlc29sdmUoZm4uY2FsbC5hcHBseShmbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuICAgIH1cblxuICAgIGlmIChkZWZlcnJlZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmZXJyZWQgPSBkZWZlcigpO1xuICAgIH1cblxuICAgIHBlbmRpbmdBcmdzLnB1c2goYXJncyk7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZsdXNoLmJpbmQodGhpcyksIGN1cnJlbnRXYWl0KTtcblxuICAgIGlmIChvcHRpb25zLmFjY3VtdWxhdGUpIHtcbiAgICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJnc0luZGV4ID0gcGVuZGluZ0FyZ3MubGVuZ3RoIC0gMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2OiBkZWZlcnJlZC5wcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzW2FyZ3NJbmRleF07XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0oKTtcblxuICAgICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICAgIH1cblxuICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHZhciB0aGlzRGVmZXJyZWQgPSBkZWZlcnJlZDtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgUHJvbWlzZS5yZXNvbHZlKG9wdGlvbnMuYWNjdW11bGF0ZSA/IGZuLmNhbGwodGhpcywgcGVuZGluZ0FyZ3MpIDogZm4uYXBwbHkodGhpcywgcGVuZGluZ0FyZ3NbcGVuZGluZ0FyZ3MubGVuZ3RoIC0gMV0pKS50aGVuKHRoaXNEZWZlcnJlZC5yZXNvbHZlLCB0aGlzRGVmZXJyZWQucmVqZWN0KTtcblxuICAgIHBlbmRpbmdBcmdzID0gW107XG4gICAgZGVmZXJyZWQgPSBudWxsO1xuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRXYWl0KHdhaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiB3YWl0ID09PSAnZnVuY3Rpb24nID8gd2FpdCgpIDogd2FpdDtcbn1cblxuZnVuY3Rpb24gZGVmZXIoKSB7XG4gIHZhciBkZWZlcnJlZCA9IHt9O1xuICBkZWZlcnJlZC5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGRlZmVycmVkLnJlc29sdmUgPSByZXNvbHZlO1xuICAgIGRlZmVycmVkLnJlamVjdCA9IHJlamVjdDtcbiAgfSk7XG4gIHJldHVybiBkZWZlcnJlZDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5kZWVwbWVyZ2UgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpXG5cdFx0JiYgIWlzU3BlY2lhbCh2YWx1ZSlcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuXHR2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG5cdHJldHVybiBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgUmVnRXhwXSdcblx0XHR8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG5cdFx0fHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpXG59XG5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBjYW5Vc2VTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG5cbmZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG5cdHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFXG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuXHRyZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh2YWx1ZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gKG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKVxuXHRcdD8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpXG5cdFx0OiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpXG5cdH0pXG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuXHRpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG5cdFx0T2JqZWN0LmtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fVxuXHRPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0aWYgKCFvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRvcHRpb25zLmFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cdG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0O1xuXG5cdHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuXHR2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcblx0dmFyIHNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2ggPSBzb3VyY2VJc0FycmF5ID09PSB0YXJnZXRJc0FycmF5O1xuXG5cdGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSBpZiAoc291cmNlSXNBcnJheSkge1xuXHRcdHJldHVybiBvcHRpb25zLmFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcblx0aWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jylcblx0fVxuXG5cdHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuXHRcdHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9ucylcblx0fSwge30pXG59O1xuXG52YXIgZGVlcG1lcmdlXzEgPSBkZWVwbWVyZ2U7XG5cbnJldHVybiBkZWVwbWVyZ2VfMTtcblxufSkpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSgxODcpOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCcuL2VtcHR5RnVuY3Rpb24nKTtcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZy5hcHBseSh1bmRlZmluZWQsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGV4KSB7IHJldHVybiAoZXggJiYgKHR5cGVvZiBleCA9PT0gJ29iamVjdCcpICYmICdkZWZhdWx0JyBpbiBleCkgPyBleFsnZGVmYXVsdCddIDogZXg7IH1cblxudmFyIHRzbGliXzEgPSByZXF1aXJlKCd0c2xpYicpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdob2lzdC1ub24tcmVhY3Qtc3RhdGljcycpKTtcbnZhciBjcmVhdGVDb250ZXh0ID0gX2ludGVyb3BEZWZhdWx0KHJlcXVpcmUoJ2NyZWF0ZS1yZWFjdC1jb250ZXh0JykpO1xudmFyIGNsb25lRGVlcCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdsb2Rhc2guY2xvbmVkZWVwJykpO1xudmFyIHRvUGF0aCA9IF9pbnRlcm9wRGVmYXVsdChyZXF1aXJlKCdsb2Rhc2gudG9wYXRoJykpO1xudmFyIGlzRXF1YWwgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgncmVhY3QtZmFzdC1jb21wYXJlJykpO1xudmFyIHdhcm5pbmcgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnd2FybmluZycpKTtcbnZhciBkZWVwbWVyZ2UgPSBfaW50ZXJvcERlZmF1bHQocmVxdWlyZSgnZGVlcG1lcmdlJykpO1xuXG52YXIgX2E7XG52YXIgRm9ybWlrUHJvdmlkZXIgPSAoX2EgPSBjcmVhdGVDb250ZXh0KHt9KSwgX2EuUHJvdmlkZXIpLCBGb3JtaWtDb25zdW1lciA9IF9hLkNvbnN1bWVyO1xuZnVuY3Rpb24gY29ubmVjdChDb21wKSB7XG4gICAgdmFyIEMgPSBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1pa0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoZm9ybWlrKSB7IHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXAsIHRzbGliXzEuX19hc3NpZ24oe30sIHByb3BzLCB7IGZvcm1pazogZm9ybWlrIH0pKTsgfSkpOyB9O1xuICAgIEMuV3JhcHBlZENvbXBvbmVudCA9IENvbXA7XG4gICAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKEMsIENvbXApO1xufVxuXG5mdW5jdGlvbiBnZXRJbihvYmosIGtleSwgZGVmLCBwKSB7XG4gICAgaWYgKHAgPT09IHZvaWQgMCkgeyBwID0gMDsgfVxuICAgIHZhciBwYXRoID0gdG9QYXRoKGtleSk7XG4gICAgd2hpbGUgKG9iaiAmJiBwIDwgcGF0aC5sZW5ndGgpIHtcbiAgICAgICAgb2JqID0gb2JqW3BhdGhbcCsrXV07XG4gICAgfVxuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCA/IGRlZiA6IG9iajtcbn1cbmZ1bmN0aW9uIHNldEluKG9iaiwgcGF0aCwgdmFsdWUpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgdmFyIHJlc1ZhbCA9IHJlcztcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGhBcnJheSA9IHRvUGF0aChwYXRoKTtcbiAgICBmb3IgKDsgaSA8IHBhdGhBcnJheS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQYXRoID0gcGF0aEFycmF5W2ldO1xuICAgICAgICB2YXIgY3VycmVudE9iaiA9IGdldEluKG9iaiwgcGF0aEFycmF5LnNsaWNlKDAsIGkgKyAxKSk7XG4gICAgICAgIGlmIChyZXNWYWxbY3VycmVudFBhdGhdKSB7XG4gICAgICAgICAgICByZXNWYWwgPSByZXNWYWxbY3VycmVudFBhdGhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRPYmopIHtcbiAgICAgICAgICAgIHJlc1ZhbCA9IHJlc1ZhbFtjdXJyZW50UGF0aF0gPSBjbG9uZURlZXAoY3VycmVudE9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbmV4dFBhdGggPSBwYXRoQXJyYXlbaSArIDFdO1xuICAgICAgICAgICAgcmVzVmFsID0gcmVzVmFsW2N1cnJlbnRQYXRoXSA9XG4gICAgICAgICAgICAgICAgaXNJbnRlZ2VyKG5leHRQYXRoKSAmJiBOdW1iZXIobmV4dFBhdGgpID49IDAgPyBbXSA6IHt9O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICgoaSA9PT0gMCA/IG9iaiA6IHJlc1ZhbClbcGF0aEFycmF5W2ldXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVsZXRlIHJlc1ZhbFtwYXRoQXJyYXlbaV1dO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzVmFsW3BhdGhBcnJheVtpXV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IHRzbGliXzEuX19hc3NpZ24oe30sIG9iaiwgcmVzKTtcbiAgICBpZiAoaSA9PT0gMCAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSByZXN1bHRbcGF0aEFycmF5W2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHNldE5lc3RlZE9iamVjdFZhbHVlcyhvYmplY3QsIHZhbHVlLCB2aXNpdGVkLCByZXNwb25zZSkge1xuICAgIGlmICh2aXNpdGVkID09PSB2b2lkIDApIHsgdmlzaXRlZCA9IG5ldyBXZWFrTWFwKCk7IH1cbiAgICBpZiAocmVzcG9uc2UgPT09IHZvaWQgMCkgeyByZXNwb25zZSA9IHt9OyB9XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9iamVjdCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrID0gX2FbX2ldO1xuICAgICAgICB2YXIgdmFsID0gb2JqZWN0W2tdO1xuICAgICAgICBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAgICAgICAgaWYgKCF2aXNpdGVkLmdldCh2YWwpKSB7XG4gICAgICAgICAgICAgICAgdmlzaXRlZC5zZXQodmFsLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZVtrXSA9IEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge307XG4gICAgICAgICAgICAgICAgc2V0TmVzdGVkT2JqZWN0VmFsdWVzKHZhbCwgdmFsdWUsIHZpc2l0ZWQsIHJlc3BvbnNlW2tdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc3BvbnNlW2tdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xudmFyIGlzSW50ZWdlciA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gU3RyaW5nKE1hdGguZmxvb3IoTnVtYmVyKG9iaikpKSA9PT0gb2JqO1xufTtcbnZhciBpc1N0cmluZyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xufTtcbnZhciBpc05hTiA9IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAhPT0gb2JqOyB9O1xudmFyIGlzRW1wdHlDaGlsZHJlbiA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDA7XG59O1xudmFyIGlzUHJvbWlzZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS50aGVuKTtcbn07XG5mdW5jdGlvbiBnZXRBY3RpdmVFbGVtZW50KGRvYykge1xuICAgIGRvYyA9IGRvYyB8fCAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkKTtcbiAgICBpZiAodHlwZW9mIGRvYyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkb2MuYWN0aXZlRWxlbWVudCB8fCBkb2MuYm9keTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGRvYy5ib2R5O1xuICAgIH1cbn1cblxudmFyIEZvcm1payA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRm9ybWlrLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcm1payhwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaGNDYWNoZSA9IHt9O1xuICAgICAgICBfdGhpcy5oYkNhY2hlID0ge307XG4gICAgICAgIF90aGlzLnJlZ2lzdGVyRmllbGQgPSBmdW5jdGlvbiAobmFtZSwgQ29tcCkge1xuICAgICAgICAgICAgX3RoaXMuZmllbGRzW25hbWVdID0gQ29tcDtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMudW5yZWdpc3RlckZpZWxkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBfdGhpcy5maWVsZHNbbmFtZV07XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldEVycm9ycyA9IGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZXJyb3JzOiBlcnJvcnMgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldFRvdWNoZWQgPSBmdW5jdGlvbiAodG91Y2hlZCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB0b3VjaGVkOiB0b3VjaGVkIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMudmFsaWRhdGVPbkJsdXIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuVmFsaWRhdGlvbnMoX3RoaXMuc3RhdGUudmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB2YWx1ZXM6IHZhbHVlcyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnZhbGlkYXRlT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuVmFsaWRhdGlvbnModmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IHN0YXR1cyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXYXJuaW5nOiBGb3JtaWsncyBzZXRFcnJvcihlcnJvcikgaXMgZGVwcmVjYXRlZCBhbmQgbWF5IGJlIHJlbW92ZWQgaW4gZnV0dXJlIHJlbGVhc2VzLiBQbGVhc2UgdXNlIEZvcm1paydzIHNldFN0YXR1cyhzdGF0dXMpIGluc3RlYWQuIEl0IHdvcmtzIGlkZW50aWNhbGx5LiBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFyZWRwYWxtZXIvZm9ybWlrI3NldHN0YXR1cy1zdGF0dXMtYW55LS12b2lkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldFN1Ym1pdHRpbmcgPSBmdW5jdGlvbiAoaXNTdWJtaXR0aW5nKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzU3VibWl0dGluZzogaXNTdWJtaXR0aW5nIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy52YWxpZGF0ZUZpZWxkID0gZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzVmFsaWRhdGluZzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIF90aGlzLnJ1blNpbmdsZUZpZWxkTGV2ZWxWYWxpZGF0aW9uKGZpZWxkLCBnZXRJbihfdGhpcy5zdGF0ZS52YWx1ZXMsIGZpZWxkKSkudGhlbihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBzZXRJbihfdGhpcy5zdGF0ZS5lcnJvcnMsIGZpZWxkLCBlcnJvciksXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucnVuU2luZ2xlRmllbGRMZXZlbFZhbGlkYXRpb24gPSBmdW5jdGlvbiAoZmllbGQsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShfdGhpcy5maWVsZHNbZmllbGRdLnByb3BzLnZhbGlkYXRlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9LCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZTsgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJ1blZhbGlkYXRpb25TY2hlbWEgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdGlvblNjaGVtYSA9IF90aGlzLnByb3BzLnZhbGlkYXRpb25TY2hlbWE7XG4gICAgICAgICAgICAgICAgdmFyIHNjaGVtYSA9IGlzRnVuY3Rpb24odmFsaWRhdGlvblNjaGVtYSlcbiAgICAgICAgICAgICAgICAgICAgPyB2YWxpZGF0aW9uU2NoZW1hKClcbiAgICAgICAgICAgICAgICAgICAgOiB2YWxpZGF0aW9uU2NoZW1hO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlWXVwU2NoZW1hKHZhbHVlcywgc2NoZW1hKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHl1cFRvRm9ybUVycm9ycyhlcnIpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9ucyA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMgPT09IHZvaWQgMCkgeyB2YWx1ZXMgPSBfdGhpcy5zdGF0ZS52YWx1ZXM7IH1cbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNWYWxpZGF0aW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBfdGhpcy5ydW5GaWVsZExldmVsVmFsaWRhdGlvbnModmFsdWVzKSxcbiAgICAgICAgICAgICAgICBfdGhpcy5wcm9wcy52YWxpZGF0aW9uU2NoZW1hID8gX3RoaXMucnVuVmFsaWRhdGlvblNjaGVtYSh2YWx1ZXMpIDoge30sXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMudmFsaWRhdGUgPyBfdGhpcy5ydW5WYWxpZGF0ZUhhbmRsZXIodmFsdWVzKSA6IHt9LFxuICAgICAgICAgICAgXSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmllbGRFcnJvcnMgPSBfYVswXSwgc2NoZW1hRXJyb3JzID0gX2FbMV0sIGhhbmRsZXJFcnJvcnMgPSBfYVsyXTtcbiAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRFcnJvcnMgPSBkZWVwbWVyZ2UuYWxsKFtmaWVsZEVycm9ycywgc2NoZW1hRXJyb3JzLCBoYW5kbGVyRXJyb3JzXSwgeyBhcnJheU1lcmdlOiBhcnJheU1lcmdlIH0pO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5kaWRNb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzVmFsaWRhdGluZzogZmFsc2UsIGVycm9yczogY29tYmluZWRFcnJvcnMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb21iaW5lZEVycm9ycztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnRPclBhdGgpIHtcbiAgICAgICAgICAgIHZhciBleGVjdXRlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50T3JUZXh0VmFsdWUsIG1heWJlUGF0aCkge1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IG1heWJlUGF0aDtcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gZXZlbnRPclRleHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgcGFyc2VkO1xuICAgICAgICAgICAgICAgIGlmICghaXNTdHJpbmcoZXZlbnRPclRleHRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50T3JUZXh0VmFsdWUucGVyc2lzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRPclRleHRWYWx1ZS5wZXJzaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gZXZlbnRPclRleHRWYWx1ZS50YXJnZXQsIHR5cGUgPSBfYS50eXBlLCBuYW1lXzEgPSBfYS5uYW1lLCBpZCA9IF9hLmlkLCB2YWx1ZSA9IF9hLnZhbHVlLCBjaGVja2VkID0gX2EuY2hlY2tlZCwgb3V0ZXJIVE1MID0gX2Eub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IG1heWJlUGF0aCA/IG1heWJlUGF0aCA6IG5hbWVfMSA/IG5hbWVfMSA6IGlkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkICYmIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXJuQWJvdXRNaXNzaW5nSWRlbnRpZmllcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbENvbnRlbnQ6IG91dGVySFRNTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudGF0aW9uQW5jaG9yTGluazogJ2hhbmRsZWNoYW5nZS1lLXJlYWN0Y2hhbmdlZXZlbnRhbnktLXZvaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJOYW1lOiAnaGFuZGxlQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IC9udW1iZXJ8cmFuZ2UvLnRlc3QodHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKChwYXJzZWQgPSBwYXJzZUZsb2F0KHZhbHVlKSksIGlzTmFOKHBhcnNlZCkgPyAnJyA6IHBhcnNlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogL2NoZWNrYm94Ly50ZXN0KHR5cGUpID8gY2hlY2tlZCA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkgeyByZXR1cm4gKHRzbGliXzEuX19hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyB2YWx1ZXM6IHNldEluKHByZXZTdGF0ZS52YWx1ZXMsIGZpZWxkLCB2YWwpIH0pKTsgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnZhbGlkYXRlT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9ucyhzZXRJbihfdGhpcy5zdGF0ZS52YWx1ZXMsIGZpZWxkLCB2YWwpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc1N0cmluZyhldmVudE9yUGF0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihfdGhpcy5oY0NhY2hlW2V2ZW50T3JQYXRoXSlcbiAgICAgICAgICAgICAgICAgICAgPyBfdGhpcy5oY0NhY2hlW2V2ZW50T3JQYXRoXVxuICAgICAgICAgICAgICAgICAgICA6IChfdGhpcy5oY0NhY2hlW2V2ZW50T3JQYXRoXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVDaGFuZ2UoZXZlbnQsIGV2ZW50T3JQYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRlQ2hhbmdlKGV2ZW50T3JQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0RmllbGRWYWx1ZSA9IGZ1bmN0aW9uIChmaWVsZCwgdmFsdWUsIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkVmFsaWRhdGUgPT09IHZvaWQgMCkgeyBzaG91bGRWYWxpZGF0ZSA9IHRydWU7IH1cbiAgICAgICAgICAgIGlmIChfdGhpcy5kaWRNb3VudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHsgcmV0dXJuICh0c2xpYl8xLl9fYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgdmFsdWVzOiBzZXRJbihwcmV2U3RhdGUudmFsdWVzLCBmaWVsZCwgdmFsdWUpIH0pKTsgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMudmFsaWRhdGVPbkNoYW5nZSAmJiBzaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucnVuVmFsaWRhdGlvbnMoX3RoaXMuc3RhdGUudmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUgJiYgZS5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBnZXRBY3RpdmVFbGVtZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmcoISEoYWN0aXZlRWxlbWVudC5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCd0eXBlJykpLCAnWW91IHN1Ym1pdHRlZCBhIEZvcm1payBmb3JtIHVzaW5nIGEgYnV0dG9uIHdpdGggYW4gdW5zcGVjaWZpZWQgYHR5cGVgIGF0dHJpYnV0ZS4gIE1vc3QgYnJvd3NlcnMgZGVmYXVsdCBidXR0b24gZWxlbWVudHMgdG8gYHR5cGU9XCJzdWJtaXRcImAuIElmIHRoaXMgaXMgbm90IGEgc3VibWl0IGJ1dHRvbiwgcGxlYXNlIGFkZCBgdHlwZT1cImJ1dHRvblwiYC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgICAgIHRvdWNoZWQ6IHNldE5lc3RlZE9iamVjdFZhbHVlcyhwcmV2U3RhdGUudmFsdWVzLCB0cnVlKSxcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VibWl0Q291bnQ6IHByZXZTdGF0ZS5zdWJtaXRDb3VudCArIDEsXG4gICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucnVuVmFsaWRhdGlvbnMoKS50aGVuKGZ1bmN0aW9uIChjb21iaW5lZEVycm9ycykge1xuICAgICAgICAgICAgICAgIHZhciBpc1ZhbGlkID0gT2JqZWN0LmtleXMoY29tYmluZWRFcnJvcnMpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5leGVjdXRlU3VibWl0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF90aGlzLmRpZE1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNTdWJtaXR0aW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZXhlY3V0ZVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uU3VibWl0KF90aGlzLnN0YXRlLnZhbHVlcywgX3RoaXMuZ2V0Rm9ybWlrQWN0aW9ucygpKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudE9yU3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgZXhlY3V0ZUJsdXIgPSBmdW5jdGlvbiAoZSwgcGF0aCkge1xuICAgICAgICAgICAgICAgIGlmIChlLnBlcnNpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wZXJzaXN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBfYSA9IGUudGFyZ2V0LCBuYW1lID0gX2EubmFtZSwgaWQgPSBfYS5pZCwgb3V0ZXJIVE1MID0gX2Eub3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IHBhdGggPyBwYXRoIDogbmFtZSA/IG5hbWUgOiBpZDtcbiAgICAgICAgICAgICAgICBpZiAoIWZpZWxkICYmIFwiZGV2ZWxvcG1lbnRcIiAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHdhcm5BYm91dE1pc3NpbmdJZGVudGlmaWVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxDb250ZW50OiBvdXRlckhUTUwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudGF0aW9uQW5jaG9yTGluazogJ2hhbmRsZWJsdXItZS1hbnktLXZvaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlck5hbWU6ICdoYW5kbGVCbHVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ6IHNldEluKHByZXZTdGF0ZS50b3VjaGVkLCBmaWVsZCwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgfSk7IH0pO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQmx1cikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ydW5WYWxpZGF0aW9ucyhfdGhpcy5zdGF0ZS52YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcoZXZlbnRPclN0cmluZykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNGdW5jdGlvbihfdGhpcy5oYkNhY2hlW2V2ZW50T3JTdHJpbmddKVxuICAgICAgICAgICAgICAgICAgICA/IF90aGlzLmhiQ2FjaGVbZXZlbnRPclN0cmluZ11cbiAgICAgICAgICAgICAgICAgICAgOiAoX3RoaXMuaGJDYWNoZVtldmVudE9yU3RyaW5nXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVCbHVyKGV2ZW50LCBldmVudE9yU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGVjdXRlQmx1cihldmVudE9yU3RyaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2V0RmllbGRUb3VjaGVkID0gZnVuY3Rpb24gKGZpZWxkLCB0b3VjaGVkLCBzaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRvdWNoZWQgPT09IHZvaWQgMCkgeyB0b3VjaGVkID0gdHJ1ZTsgfVxuICAgICAgICAgICAgaWYgKHNob3VsZFZhbGlkYXRlID09PSB2b2lkIDApIHsgc2hvdWxkVmFsaWRhdGUgPSB0cnVlOyB9XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7IHJldHVybiAodHNsaWJfMS5fX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7IHRvdWNoZWQ6IHNldEluKHByZXZTdGF0ZS50b3VjaGVkLCBmaWVsZCwgdG91Y2hlZCkgfSkpOyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLnZhbGlkYXRlT25CbHVyICYmIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJ1blZhbGlkYXRpb25zKF90aGlzLnN0YXRlLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldEZpZWxkRXJyb3IgPSBmdW5jdGlvbiAoZmllbGQsIG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHsgcmV0dXJuICh0c2xpYl8xLl9fYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgZXJyb3JzOiBzZXRJbihwcmV2U3RhdGUuZXJyb3JzLCBmaWVsZCwgbWVzc2FnZSkgfSkpOyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVzZXRGb3JtID0gZnVuY3Rpb24gKG5leHRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZXMgPSBuZXh0VmFsdWVzID8gbmV4dFZhbHVlcyA6IF90aGlzLnByb3BzLmluaXRpYWxWYWx1ZXM7XG4gICAgICAgICAgICBfdGhpcy5pbml0aWFsVmFsdWVzID0gdmFsdWVzO1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGlzU3VibWl0dGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcnM6IHt9LFxuICAgICAgICAgICAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgc3VibWl0Q291bnQ6IDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlUmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25SZXNldCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXliZVByb21pc2VkT25SZXNldCA9IF90aGlzLnByb3BzLm9uUmVzZXQoX3RoaXMuc3RhdGUudmFsdWVzLCBfdGhpcy5nZXRGb3JtaWtBY3Rpb25zKCkpO1xuICAgICAgICAgICAgICAgIGlmIChpc1Byb21pc2UobWF5YmVQcm9taXNlZE9uUmVzZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZWRPblJlc2V0LnRoZW4oX3RoaXMucmVzZXRGb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRGb3JtaWtTdGF0ZSA9IGZ1bmN0aW9uIChzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKHMsIGNhbGxiYWNrKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Rm9ybWlrQWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcmVzZXRGb3JtOiBfdGhpcy5yZXNldEZvcm0sXG4gICAgICAgICAgICAgICAgc3VibWl0Rm9ybTogX3RoaXMuc3VibWl0Rm9ybSxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm06IF90aGlzLnJ1blZhbGlkYXRpb25zLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlRmllbGQ6IF90aGlzLnZhbGlkYXRlRmllbGQsXG4gICAgICAgICAgICAgICAgc2V0RXJyb3I6IF90aGlzLnNldEVycm9yLFxuICAgICAgICAgICAgICAgIHNldEVycm9yczogX3RoaXMuc2V0RXJyb3JzLFxuICAgICAgICAgICAgICAgIHNldEZpZWxkRXJyb3I6IF90aGlzLnNldEZpZWxkRXJyb3IsXG4gICAgICAgICAgICAgICAgc2V0RmllbGRUb3VjaGVkOiBfdGhpcy5zZXRGaWVsZFRvdWNoZWQsXG4gICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZTogX3RoaXMuc2V0RmllbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXM6IF90aGlzLnNldFN0YXR1cyxcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXR0aW5nOiBfdGhpcy5zZXRTdWJtaXR0aW5nLFxuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ6IF90aGlzLnNldFRvdWNoZWQsXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVzOiBfdGhpcy5zZXRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgc2V0Rm9ybWlrU3RhdGU6IF90aGlzLnNldEZvcm1pa1N0YXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Rm9ybWlrQ29tcHV0ZWRQcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpc0luaXRpYWxWYWxpZCA9IF90aGlzLnByb3BzLmlzSW5pdGlhbFZhbGlkO1xuICAgICAgICAgICAgdmFyIGRpcnR5ID0gIWlzRXF1YWwoX3RoaXMuaW5pdGlhbFZhbHVlcywgX3RoaXMuc3RhdGUudmFsdWVzKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlydHk6IGRpcnR5LFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGRpcnR5XG4gICAgICAgICAgICAgICAgICAgID8gX3RoaXMuc3RhdGUuZXJyb3JzICYmIE9iamVjdC5rZXlzKF90aGlzLnN0YXRlLmVycm9ycykubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgIDogaXNJbml0aWFsVmFsaWQgIT09IGZhbHNlICYmIGlzRnVuY3Rpb24oaXNJbml0aWFsVmFsaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGlzSW5pdGlhbFZhbGlkKF90aGlzLnByb3BzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBpc0luaXRpYWxWYWxpZCxcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzOiBfdGhpcy5pbml0aWFsVmFsdWVzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Rm9ybWlrQmFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hc3NpZ24oe30sIF90aGlzLnN0YXRlLCBfdGhpcy5nZXRGb3JtaWtBY3Rpb25zKCksIF90aGlzLmdldEZvcm1pa0NvbXB1dGVkUHJvcHMoKSwgeyByZWdpc3RlckZpZWxkOiBfdGhpcy5yZWdpc3RlckZpZWxkLCB1bnJlZ2lzdGVyRmllbGQ6IF90aGlzLnVucmVnaXN0ZXJGaWVsZCwgaGFuZGxlQmx1cjogX3RoaXMuaGFuZGxlQmx1ciwgaGFuZGxlQ2hhbmdlOiBfdGhpcy5oYW5kbGVDaGFuZ2UsIGhhbmRsZVJlc2V0OiBfdGhpcy5oYW5kbGVSZXNldCwgaGFuZGxlU3VibWl0OiBfdGhpcy5oYW5kbGVTdWJtaXQsIHZhbGlkYXRlT25DaGFuZ2U6IF90aGlzLnByb3BzLnZhbGlkYXRlT25DaGFuZ2UsIHZhbGlkYXRlT25CbHVyOiBfdGhpcy5wcm9wcy52YWxpZGF0ZU9uQmx1ciB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Rm9ybWlrQ29udGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXNzaWduKHt9LCBfdGhpcy5nZXRGb3JtaWtCYWcoKSwgeyB2YWxpZGF0aW9uU2NoZW1hOiBfdGhpcy5wcm9wcy52YWxpZGF0aW9uU2NoZW1hLCB2YWxpZGF0ZTogX3RoaXMucHJvcHMudmFsaWRhdGUsIGluaXRpYWxWYWx1ZXM6IF90aGlzLmluaXRpYWxWYWx1ZXMgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiBwcm9wcy5pbml0aWFsVmFsdWVzIHx8IHt9LFxuICAgICAgICAgICAgZXJyb3JzOiB7fSxcbiAgICAgICAgICAgIHRvdWNoZWQ6IHt9LFxuICAgICAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdWJtaXRDb3VudDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuZmllbGRzID0ge307XG4gICAgICAgIF90aGlzLmluaXRpYWxWYWx1ZXMgPSBwcm9wcy5pbml0aWFsVmFsdWVzIHx8IHt9O1xuICAgICAgICB3YXJuaW5nKCEocHJvcHMuY29tcG9uZW50ICYmIHByb3BzLnJlbmRlciksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZvcm1payBjb21wb25lbnQ+IGFuZCA8Rm9ybWlrIHJlbmRlcj4gaW4gdGhlIHNhbWUgPEZvcm1paz4gY29tcG9uZW50OyA8Rm9ybWlrIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHdhcm5pbmcoIShwcm9wcy5jb21wb25lbnQgJiYgcHJvcHMuY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbihwcm9wcy5jaGlsZHJlbikpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGb3JtaWsgY29tcG9uZW50PiBhbmQgPEZvcm1payBjaGlsZHJlbj4gaW4gdGhlIHNhbWUgPEZvcm1paz4gY29tcG9uZW50OyA8Rm9ybWlrIGNoaWxkcmVuPiB3aWxsIGJlIGlnbm9yZWQnKTtcbiAgICAgICAgd2FybmluZyghKHByb3BzLnJlbmRlciAmJiBwcm9wcy5jaGlsZHJlbiAmJiAhaXNFbXB0eUNoaWxkcmVuKHByb3BzLmNoaWxkcmVuKSksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZvcm1payByZW5kZXI+IGFuZCA8Rm9ybWlrIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSA8Rm9ybWlrPiBjb21wb25lbnQ7IDxGb3JtaWsgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZCcpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEZvcm1pay5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlkTW91bnQgPSB0cnVlO1xuICAgIH07XG4gICAgRm9ybWlrLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaWRNb3VudCA9IGZhbHNlO1xuICAgIH07XG4gICAgRm9ybWlrLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVJlaW5pdGlhbGl6ZSAmJlxuICAgICAgICAgICAgIWlzRXF1YWwocHJldlByb3BzLmluaXRpYWxWYWx1ZXMsIHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlcykpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlcyA9IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlcztcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZvcm1pay5wcm90b3R5cGUucnVuRmllbGRMZXZlbFZhbGlkYXRpb25zID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmllbGRLZXlzV2l0aFZhbGlkYXRpb24gPSBPYmplY3Qua2V5cyh0aGlzLmZpZWxkcykuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZmllbGRzICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuZmllbGRzW2ZdICYmXG4gICAgICAgICAgICAgICAgX3RoaXMuZmllbGRzW2ZdLnByb3BzLnZhbGlkYXRlICYmXG4gICAgICAgICAgICAgICAgaXNGdW5jdGlvbihfdGhpcy5maWVsZHNbZl0ucHJvcHMudmFsaWRhdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGZpZWxkVmFsaWRhdGlvbnMgPSBmaWVsZEtleXNXaXRoVmFsaWRhdGlvbi5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IGZpZWxkS2V5c1dpdGhWYWxpZGF0aW9uLm1hcChmdW5jdGlvbiAoZikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5ydW5TaW5nbGVGaWVsZExldmVsVmFsaWRhdGlvbihmLCBnZXRJbih2YWx1ZXMsIGYpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFtQcm9taXNlLnJlc29sdmUoJ0RPX05PVF9ERUxFVEVfWU9VX1dJTExfQkVfRklSRUQnKV07XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChmaWVsZFZhbGlkYXRpb25zKS50aGVuKGZ1bmN0aW9uIChmaWVsZEVycm9yc0xpc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZEVycm9yc0xpc3QucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyID09PSAnRE9fTk9UX0RFTEVURV9ZT1VfV0lMTF9CRV9GSVJFRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghIWN1cnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldiA9IHNldEluKHByZXYsIGZpZWxkS2V5c1dpdGhWYWxpZGF0aW9uW2luZGV4XSwgY3Vycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZvcm1pay5wcm90b3R5cGUucnVuVmFsaWRhdGVIYW5kbGVyID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHZhciBtYXliZVByb21pc2VkRXJyb3JzID0gX3RoaXMucHJvcHMudmFsaWRhdGUodmFsdWVzKTtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2VkRXJyb3JzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZShtYXliZVByb21pc2VkRXJyb3JzKSkge1xuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZWRFcnJvcnMudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShlcnJvcnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtYXliZVByb21pc2VkRXJyb3JzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGb3JtaWsucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgY29tcG9uZW50ID0gX2EuY29tcG9uZW50LCByZW5kZXIgPSBfYS5yZW5kZXIsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW47XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMuZ2V0Rm9ybWlrQmFnKCk7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLmdldEZvcm1pa0NvbnRleHQoKTtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1pa1Byb3ZpZGVyLCB7IHZhbHVlOiBjdHggfSwgY29tcG9uZW50XG4gICAgICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcylcbiAgICAgICAgICAgIDogcmVuZGVyXG4gICAgICAgICAgICAgICAgPyByZW5kZXIocHJvcHMpXG4gICAgICAgICAgICAgICAgOiBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICA/IGlzRnVuY3Rpb24oY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNoaWxkcmVuKHByb3BzKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAhaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsKSk7XG4gICAgfTtcbiAgICBGb3JtaWsuZGVmYXVsdFByb3BzID0ge1xuICAgICAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcbiAgICAgICAgaXNJbml0aWFsVmFsaWQ6IGZhbHNlLFxuICAgICAgICBlbmFibGVSZWluaXRpYWxpemU6IGZhbHNlLFxuICAgIH07XG4gICAgcmV0dXJuIEZvcm1paztcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5mdW5jdGlvbiB3YXJuQWJvdXRNaXNzaW5nSWRlbnRpZmllcihfYSkge1xuICAgIHZhciBodG1sQ29udGVudCA9IF9hLmh0bWxDb250ZW50LCBkb2N1bWVudGF0aW9uQW5jaG9yTGluayA9IF9hLmRvY3VtZW50YXRpb25BbmNob3JMaW5rLCBoYW5kbGVyTmFtZSA9IF9hLmhhbmRsZXJOYW1lO1xuICAgIGNvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiBGb3JtaWsgY2FsbGVkIGBcIiArIGhhbmRsZXJOYW1lICsgXCJgLCBidXQgeW91IGZvcmdvdCB0byBwYXNzIGFuIGBpZGAgb3IgYG5hbWVgIGF0dHJpYnV0ZSB0byB5b3VyIGlucHV0OlxcblxcbiAgICBcIiArIGh0bWxDb250ZW50ICsgXCJcXG5cXG4gICAgRm9ybWlrIGNhbm5vdCBkZXRlcm1pbmUgd2hpY2ggdmFsdWUgdG8gdXBkYXRlLiBGb3IgbW9yZSBpbmZvIHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFyZWRwYWxtZXIvZm9ybWlrI1wiICsgZG9jdW1lbnRhdGlvbkFuY2hvckxpbmsgKyBcIlxcbiAgXCIpO1xufVxuZnVuY3Rpb24geXVwVG9Gb3JtRXJyb3JzKHl1cEVycm9yKSB7XG4gICAgdmFyIGVycm9ycyA9IHt9O1xuICAgIGlmICh5dXBFcnJvci5pbm5lci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNldEluKGVycm9ycywgeXVwRXJyb3IucGF0aCwgeXVwRXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB5dXBFcnJvci5pbm5lcjsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGVyciA9IF9hW19pXTtcbiAgICAgICAgaWYgKCFlcnJvcnNbZXJyLnBhdGhdKSB7XG4gICAgICAgICAgICBlcnJvcnMgPSBzZXRJbihlcnJvcnMsIGVyci5wYXRoLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVycm9ycztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlWXVwU2NoZW1hKHZhbHVlcywgc2NoZW1hLCBzeW5jLCBjb250ZXh0KSB7XG4gICAgaWYgKHN5bmMgPT09IHZvaWQgMCkgeyBzeW5jID0gZmFsc2U7IH1cbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgIHZhciB2YWxpZGF0ZURhdGEgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gU3RyaW5nKGspO1xuICAgICAgICAgICAgdmFsaWRhdGVEYXRhW2tleV0gPSB2YWx1ZXNba2V5XSAhPT0gJycgPyB2YWx1ZXNba2V5XSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2NoZW1hW3N5bmMgPyAndmFsaWRhdGVTeW5jJyA6ICd2YWxpZGF0ZSddKHZhbGlkYXRlRGF0YSwge1xuICAgICAgICBhYm9ydEVhcmx5OiBmYWxzZSxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB0YXJnZXQuc2xpY2UoKTtcbiAgICBzb3VyY2UuZm9yRWFjaChmdW5jdGlvbiAoZSwgaSkge1xuICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdmFyIGNsb25lUmVxdWVzdGVkID0gb3B0aW9ucy5jbG9uZSAhPT0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgc2hvdWxkQ2xvbmUgPSBjbG9uZVJlcXVlc3RlZCAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KGUpO1xuICAgICAgICAgICAgZGVzdGluYXRpb25baV0gPSBzaG91bGRDbG9uZVxuICAgICAgICAgICAgICAgID8gZGVlcG1lcmdlKEFycmF5LmlzQXJyYXkoZSkgPyBbXSA6IHt9LCBlLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgIDogZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ucHVzaChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxudmFyIEZpZWxkSW5uZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEZpZWxkSW5uZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmllbGRJbm5lcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgdmFyIHJlbmRlciA9IHByb3BzLnJlbmRlciwgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbiwgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICAgICAgICB3YXJuaW5nKCEoY29tcG9uZW50ICYmIHJlbmRlciksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZpZWxkIGNvbXBvbmVudD4gYW5kIDxGaWVsZCByZW5kZXI+IGluIHRoZSBzYW1lIDxGaWVsZD4gY29tcG9uZW50OyA8RmllbGQgY29tcG9uZW50PiB3aWxsIGJlIGlnbm9yZWQnKTtcbiAgICAgICAgd2FybmluZyghKGNvbXBvbmVudCAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSksICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZpZWxkIGNvbXBvbmVudD4gYW5kIDxGaWVsZCBjaGlsZHJlbj4gYXMgYSBmdW5jdGlvbiBpbiB0aGUgc2FtZSA8RmllbGQ+IGNvbXBvbmVudDsgPEZpZWxkIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkLicpO1xuICAgICAgICB3YXJuaW5nKCEocmVuZGVyICYmIGNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pKSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8RmllbGQgcmVuZGVyPiBhbmQgPEZpZWxkIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSA8RmllbGQ+IGNvbXBvbmVudDsgPEZpZWxkIGNoaWxkcmVuPiB3aWxsIGJlIGlnbm9yZWQnKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGaWVsZElubmVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHRoaXMpO1xuICAgIH07XG4gICAgRmllbGRJbm5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSBwcmV2UHJvcHMubmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsudW5yZWdpc3RlckZpZWxkKHByZXZQcm9wcy5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZSAhPT0gcHJldlByb3BzLnZhbGlkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZpZWxkSW5uZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb3BzLmZvcm1pay51bnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lKTtcbiAgICB9O1xuICAgIEZpZWxkSW5uZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgdmFsaWRhdGUgPSBfYS52YWxpZGF0ZSwgbmFtZSA9IF9hLm5hbWUsIHJlbmRlciA9IF9hLnJlbmRlciwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgX2IgPSBfYS5jb21wb25lbnQsIGNvbXBvbmVudCA9IF9iID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX2IsIGZvcm1payA9IF9hLmZvcm1paywgcHJvcHMgPSB0c2xpYl8xLl9fcmVzdChfYSwgW1widmFsaWRhdGVcIiwgXCJuYW1lXCIsIFwicmVuZGVyXCIsIFwiY2hpbGRyZW5cIiwgXCJjb21wb25lbnRcIiwgXCJmb3JtaWtcIl0pO1xuICAgICAgICB2YXIgX3ZhbGlkYXRlID0gZm9ybWlrLnZhbGlkYXRlLCBfdmFsaWRhdGlvblNjaGVtYSA9IGZvcm1pay52YWxpZGF0aW9uU2NoZW1hLCByZXN0T2ZGb3JtaWsgPSB0c2xpYl8xLl9fcmVzdChmb3JtaWssIFtcInZhbGlkYXRlXCIsIFwidmFsaWRhdGlvblNjaGVtYVwiXSk7XG4gICAgICAgIHZhciBmaWVsZCA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBwcm9wcy50eXBlID09PSAncmFkaW8nIHx8IHByb3BzLnR5cGUgPT09ICdjaGVja2JveCdcbiAgICAgICAgICAgICAgICA/IHByb3BzLnZhbHVlXG4gICAgICAgICAgICAgICAgOiBnZXRJbihmb3JtaWsudmFsdWVzLCBuYW1lKSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZm9ybWlrLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIG9uQmx1cjogZm9ybWlrLmhhbmRsZUJsdXIsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBiYWcgPSB7IGZpZWxkOiBmaWVsZCwgZm9ybTogcmVzdE9mRm9ybWlrIH07XG4gICAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXIoYmFnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbihjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbihiYWcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsIHJlc3QgPSB0c2xpYl8xLl9fcmVzdChwcm9wcywgW1wiaW5uZXJSZWZcIl0pO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCB0c2xpYl8xLl9fYXNzaWduKHsgcmVmOiBpbm5lclJlZiB9LCBmaWVsZCwgcmVzdCwgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgdHNsaWJfMS5fX2Fzc2lnbih7fSwgYmFnLCBwcm9wcywgeyBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkSW5uZXI7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xudmFyIEZpZWxkID0gY29ubmVjdChGaWVsZElubmVyKTtcblxudmFyIEZvcm0gPSBjb25uZWN0KGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBfYiA9IF9hLmZvcm1paywgaGFuZGxlUmVzZXQgPSBfYi5oYW5kbGVSZXNldCwgaGFuZGxlU3VibWl0ID0gX2IuaGFuZGxlU3VibWl0LCBwcm9wcyA9IHRzbGliXzEuX19yZXN0KF9hLCBbXCJmb3JtaWtcIl0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgdHNsaWJfMS5fX2Fzc2lnbih7IG9uUmVzZXQ6IGhhbmRsZVJlc2V0LCBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0sIHByb3BzKSkpO1xufSk7XG5Gb3JtLmRpc3BsYXlOYW1lID0gJ0Zvcm0nO1xuXG5mdW5jdGlvbiB3aXRoRm9ybWlrKF9hKSB7XG4gICAgdmFyIF9iID0gX2EubWFwUHJvcHNUb1ZhbHVlcywgbWFwUHJvcHNUb1ZhbHVlcyA9IF9iID09PSB2b2lkIDAgPyBmdW5jdGlvbiAodmFuaWxsYVByb3BzKSB7XG4gICAgICAgIHZhciB2YWwgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgayBpbiB2YW5pbGxhUHJvcHMpIHtcbiAgICAgICAgICAgIGlmICh2YW5pbGxhUHJvcHMuaGFzT3duUHJvcGVydHkoaykgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgdmFuaWxsYVByb3BzW2tdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdmFsW2tdID0gdmFuaWxsYVByb3BzW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfSA6IF9iLCBjb25maWcgPSB0c2xpYl8xLl9fcmVzdChfYSwgW1wibWFwUHJvcHNUb1ZhbHVlc1wiXSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUZvcm1payhDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudERpc3BsYXlOYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8XG4gICAgICAgICAgICBDb21wb25lbnQubmFtZSB8fFxuICAgICAgICAgICAgKENvbXBvbmVudC5jb25zdHJ1Y3RvciAmJiBDb21wb25lbnQuY29uc3RydWN0b3IubmFtZSkgfHxcbiAgICAgICAgICAgICdDb21wb25lbnQnO1xuICAgICAgICB2YXIgQyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgICAgICB0c2xpYl8xLl9fZXh0ZW5kcyhDLCBfc3VwZXIpO1xuICAgICAgICAgICAgZnVuY3Rpb24gQygpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgICAgICAgICBfdGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy52YWxpZGF0ZSh2YWx1ZXMsIF90aGlzLnByb3BzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF90aGlzLnZhbGlkYXRpb25TY2hlbWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGNvbmZpZy52YWxpZGF0aW9uU2NoZW1hKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjb25maWcudmFsaWRhdGlvblNjaGVtYShfdGhpcy5wcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY29uZmlnLnZhbGlkYXRpb25TY2hlbWE7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVTdWJtaXQgPSBmdW5jdGlvbiAodmFsdWVzLCBhY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWcuaGFuZGxlU3VibWl0KHZhbHVlcywgdHNsaWJfMS5fX2Fzc2lnbih7fSwgYWN0aW9ucywgeyBwcm9wczogX3RoaXMucHJvcHMgfSkpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX3RoaXMucmVuZGVyRm9ybUNvbXBvbmVudCA9IGZ1bmN0aW9uIChmb3JtaWtQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHRzbGliXzEuX19hc3NpZ24oe30sIF90aGlzLnByb3BzLCBmb3JtaWtQcm9wcykpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIHByb3BzID0gdHNsaWJfMS5fX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybWlrLCB0c2xpYl8xLl9fYXNzaWduKHt9LCBwcm9wcywgY29uZmlnLCB7IHZhbGlkYXRlOiBjb25maWcudmFsaWRhdGUgJiYgdGhpcy52YWxpZGF0ZSwgdmFsaWRhdGlvblNjaGVtYTogY29uZmlnLnZhbGlkYXRpb25TY2hlbWEgJiYgdGhpcy52YWxpZGF0aW9uU2NoZW1hLCBpbml0aWFsVmFsdWVzOiBtYXBQcm9wc1RvVmFsdWVzKHRoaXMucHJvcHMpLCBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsIHJlbmRlcjogdGhpcy5yZW5kZXJGb3JtQ29tcG9uZW50IH0pKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQy5kaXNwbGF5TmFtZSA9IFwiV2l0aEZvcm1payhcIiArIGNvbXBvbmVudERpc3BsYXlOYW1lICsgXCIpXCI7XG4gICAgICAgICAgICByZXR1cm4gQztcbiAgICAgICAgfShSZWFjdC5Db21wb25lbnQpKTtcbiAgICAgICAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKEMsIENvbXBvbmVudCk7XG4gICAgfTtcbn1cblxudmFyIG1vdmUgPSBmdW5jdGlvbiAoYXJyYXksIGZyb20sIHRvKSB7XG4gICAgdmFyIGNvcHkgPSAoYXJyYXkgfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIHZhbHVlID0gY29weVtmcm9tXTtcbiAgICBjb3B5LnNwbGljZShmcm9tLCAxKTtcbiAgICBjb3B5LnNwbGljZSh0bywgMCwgdmFsdWUpO1xuICAgIHJldHVybiBjb3B5O1xufTtcbnZhciBzd2FwID0gZnVuY3Rpb24gKGFycmF5LCBpbmRleEEsIGluZGV4Qikge1xuICAgIHZhciBjb3B5ID0gKGFycmF5IHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBhID0gY29weVtpbmRleEFdO1xuICAgIGNvcHlbaW5kZXhBXSA9IGNvcHlbaW5kZXhCXTtcbiAgICBjb3B5W2luZGV4Ql0gPSBhO1xuICAgIHJldHVybiBjb3B5O1xufTtcbnZhciBpbnNlcnQgPSBmdW5jdGlvbiAoYXJyYXksIGluZGV4LCB2YWx1ZSkge1xuICAgIHZhciBjb3B5ID0gKGFycmF5IHx8IFtdKS5zbGljZSgpO1xuICAgIGNvcHkuc3BsaWNlKGluZGV4LCAwLCB2YWx1ZSk7XG4gICAgcmV0dXJuIGNvcHk7XG59O1xudmFyIHJlcGxhY2UgPSBmdW5jdGlvbiAoYXJyYXksIGluZGV4LCB2YWx1ZSkge1xuICAgIHZhciBjb3B5ID0gKGFycmF5IHx8IFtdKS5zbGljZSgpO1xuICAgIGNvcHlbaW5kZXhdID0gdmFsdWU7XG4gICAgcmV0dXJuIGNvcHk7XG59O1xudmFyIEZpZWxkQXJyYXlJbm5lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRmllbGRBcnJheUlubmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZpZWxkQXJyYXlJbm5lcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudXBkYXRlQXJyYXlGaWVsZCA9IGZ1bmN0aW9uIChmbiwgYWx0ZXJUb3VjaGVkLCBhbHRlckVycm9ycykge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIG5hbWUgPSBfYS5uYW1lLCB2YWxpZGF0ZU9uQ2hhbmdlID0gX2EudmFsaWRhdGVPbkNoYW5nZSwgX2IgPSBfYS5mb3JtaWssIHNldEZvcm1pa1N0YXRlID0gX2Iuc2V0Rm9ybWlrU3RhdGUsIHZhbGlkYXRlRm9ybSA9IF9iLnZhbGlkYXRlRm9ybSwgdmFsdWVzID0gX2IudmFsdWVzLCB0b3VjaGVkID0gX2IudG91Y2hlZCwgZXJyb3JzID0gX2IuZXJyb3JzO1xuICAgICAgICAgICAgc2V0Rm9ybWlrU3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkgeyByZXR1cm4gKHRzbGliXzEuX19hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyB2YWx1ZXM6IHNldEluKHByZXZTdGF0ZS52YWx1ZXMsIG5hbWUsIGZuKGdldEluKHZhbHVlcywgbmFtZSkpKSwgZXJyb3JzOiBhbHRlckVycm9yc1xuICAgICAgICAgICAgICAgICAgICA/IHNldEluKHByZXZTdGF0ZS5lcnJvcnMsIG5hbWUsIGZuKGdldEluKGVycm9ycywgbmFtZSkpKVxuICAgICAgICAgICAgICAgICAgICA6IHByZXZTdGF0ZS5lcnJvcnMsIHRvdWNoZWQ6IGFsdGVyVG91Y2hlZFxuICAgICAgICAgICAgICAgICAgICA/IHNldEluKHByZXZTdGF0ZS50b3VjaGVkLCBuYW1lLCBmbihnZXRJbih0b3VjaGVkLCBuYW1lKSkpXG4gICAgICAgICAgICAgICAgICAgIDogcHJldlN0YXRlLnRvdWNoZWQgfSkpOyB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnB1c2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheSkgeyByZXR1cm4gKGFycmF5IHx8IFtdKS5jb25jYXQoW2Nsb25lRGVlcCh2YWx1ZSldKTsgfSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlUHVzaCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMucHVzaCh2YWx1ZSk7IH07IH07XG4gICAgICAgIF90aGlzLnN3YXAgPSBmdW5jdGlvbiAoaW5kZXhBLCBpbmRleEIpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheSkgeyByZXR1cm4gc3dhcChhcnJheSwgaW5kZXhBLCBpbmRleEIpOyB9LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlU3dhcCA9IGZ1bmN0aW9uIChpbmRleEEsIGluZGV4QikgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnN3YXAoaW5kZXhBLCBpbmRleEIpO1xuICAgICAgICB9OyB9O1xuICAgICAgICBfdGhpcy5tb3ZlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIG1vdmUoYXJyYXksIGZyb20sIHRvKTsgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZU1vdmUgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1vdmUoZnJvbSwgdG8pOyB9OyB9O1xuICAgICAgICBfdGhpcy5pbnNlcnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHsgcmV0dXJuIGluc2VydChhcnJheSwgaW5kZXgsIHZhbHVlKTsgfSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUluc2VydCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmluc2VydChpbmRleCwgdmFsdWUpOyB9OyB9O1xuICAgICAgICBfdGhpcy5yZXBsYWNlID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7IHJldHVybiByZXBsYWNlKGFycmF5LCBpbmRleCwgdmFsdWUpOyB9LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVSZXBsYWNlID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlcGxhY2UoaW5kZXgsIHZhbHVlKTtcbiAgICAgICAgfTsgfTtcbiAgICAgICAgX3RoaXMudW5zaGlmdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IC0xO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJyID0gYXJyYXkgPyBbdmFsdWVdLmNvbmNhdChhcnJheSkgOiBbdmFsdWVdO1xuICAgICAgICAgICAgICAgIGlmIChsZW5ndGggPCAwKVxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgICAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVVuc2hpZnQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVuc2hpZnQodmFsdWUpOyB9OyB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVSZW1vdmUgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlbW92ZShpbmRleCk7IH07IH07XG4gICAgICAgIF90aGlzLmhhbmRsZVBvcCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnBvcCgpOyB9OyB9O1xuICAgICAgICBfdGhpcy5yZW1vdmUgPSBfdGhpcy5yZW1vdmUuYmluZChfdGhpcyk7XG4gICAgICAgIF90aGlzLnBvcCA9IF90aGlzLnBvcC5iaW5kKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGaWVsZEFycmF5SW5uZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IGFycmF5ID8gYXJyYXkuc2xpY2UoKSA6IFtdO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBjb3B5W2luZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGNvcHkuc3BsaWNlKSkge1xuICAgICAgICAgICAgICAgIGNvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIEZpZWxkQXJyYXlJbm5lci5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0aGlzLnVwZGF0ZUFycmF5RmllbGQoZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICAgICAgICB2YXIgdG1wID0gYXJyYXk7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRtcCAmJiB0bXAucG9wICYmIHRtcC5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgIH0sIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgRmllbGRBcnJheUlubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcnJheUhlbHBlcnMgPSB7XG4gICAgICAgICAgICBwdXNoOiB0aGlzLnB1c2gsXG4gICAgICAgICAgICBwb3A6IHRoaXMucG9wLFxuICAgICAgICAgICAgc3dhcDogdGhpcy5zd2FwLFxuICAgICAgICAgICAgbW92ZTogdGhpcy5tb3ZlLFxuICAgICAgICAgICAgaW5zZXJ0OiB0aGlzLmluc2VydCxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRoaXMucmVwbGFjZSxcbiAgICAgICAgICAgIHVuc2hpZnQ6IHRoaXMudW5zaGlmdCxcbiAgICAgICAgICAgIHJlbW92ZTogdGhpcy5yZW1vdmUsXG4gICAgICAgICAgICBoYW5kbGVQdXNoOiB0aGlzLmhhbmRsZVB1c2gsXG4gICAgICAgICAgICBoYW5kbGVQb3A6IHRoaXMuaGFuZGxlUG9wLFxuICAgICAgICAgICAgaGFuZGxlU3dhcDogdGhpcy5oYW5kbGVTd2FwLFxuICAgICAgICAgICAgaGFuZGxlTW92ZTogdGhpcy5oYW5kbGVNb3ZlLFxuICAgICAgICAgICAgaGFuZGxlSW5zZXJ0OiB0aGlzLmhhbmRsZUluc2VydCxcbiAgICAgICAgICAgIGhhbmRsZVJlcGxhY2U6IHRoaXMuaGFuZGxlUmVwbGFjZSxcbiAgICAgICAgICAgIGhhbmRsZVVuc2hpZnQ6IHRoaXMuaGFuZGxlVW5zaGlmdCxcbiAgICAgICAgICAgIGhhbmRsZVJlbW92ZTogdGhpcy5oYW5kbGVSZW1vdmUsXG4gICAgICAgIH07XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIGNvbXBvbmVudCA9IF9hLmNvbXBvbmVudCwgcmVuZGVyID0gX2EucmVuZGVyLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBuYW1lID0gX2EubmFtZSwgX2IgPSBfYS5mb3JtaWssIF92YWxpZGF0ZSA9IF9iLnZhbGlkYXRlLCBfdmFsaWRhdGlvblNjaGVtYSA9IF9iLnZhbGlkYXRpb25TY2hlbWEsIHJlc3RPZkZvcm1payA9IHRzbGliXzEuX19yZXN0KF9iLCBbXCJ2YWxpZGF0ZVwiLCBcInZhbGlkYXRpb25TY2hlbWFcIl0pO1xuICAgICAgICB2YXIgcHJvcHMgPSB0c2xpYl8xLl9fYXNzaWduKHt9LCBhcnJheUhlbHBlcnMsIHsgZm9ybTogcmVzdE9mRm9ybWlrLCBuYW1lOiBuYW1lIH0pO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50XG4gICAgICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcylcbiAgICAgICAgICAgIDogcmVuZGVyXG4gICAgICAgICAgICAgICAgPyByZW5kZXIocHJvcHMpXG4gICAgICAgICAgICAgICAgOiBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICA/IHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGlsZHJlbihwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikgPyBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuICAgIH07XG4gICAgRmllbGRBcnJheUlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgdmFsaWRhdGVPbkNoYW5nZTogdHJ1ZSxcbiAgICB9O1xuICAgIHJldHVybiBGaWVsZEFycmF5SW5uZXI7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xudmFyIEZpZWxkQXJyYXkgPSBjb25uZWN0KEZpZWxkQXJyYXlJbm5lcik7XG5cbnZhciBGYXN0RmllbGRJbm5lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRmFzdEZpZWxkSW5uZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmFzdEZpZWxkSW5uZXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIHZhciByZW5kZXIgPSBwcm9wcy5yZW5kZXIsIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sIGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudDtcbiAgICAgICAgd2FybmluZyghKGNvbXBvbmVudCAmJiByZW5kZXIpLCAnWW91IHNob3VsZCBub3QgdXNlIDxGYXN0RmllbGQgY29tcG9uZW50PiBhbmQgPEZhc3RGaWVsZCByZW5kZXI+IGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZCcpO1xuICAgICAgICB3YXJuaW5nKCEoY29tcG9uZW50ICYmIGNoaWxkcmVuICYmIGlzRnVuY3Rpb24oY2hpbGRyZW4pKSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8RmFzdEZpZWxkIGNvbXBvbmVudD4gYW5kIDxGYXN0RmllbGQgY2hpbGRyZW4+IGFzIGEgZnVuY3Rpb24gaW4gdGhlIHNhbWUgPEZhc3RGaWVsZD4gY29tcG9uZW50OyA8RmFzdEZpZWxkIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkLicpO1xuICAgICAgICB3YXJuaW5nKCEocmVuZGVyICYmIGNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pKSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8RmFzdEZpZWxkIHJlbmRlcj4gYW5kIDxGYXN0RmllbGQgY2hpbGRyZW4+IGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRmFzdEZpZWxkSW5uZXIucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5zaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNob3VsZFVwZGF0ZShwcm9wcywgdGhpcy5wcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsudmFsdWVzLCB0aGlzLnByb3BzLm5hbWUpICE9PVxuICAgICAgICAgICAgZ2V0SW4ocHJvcHMuZm9ybWlrLnZhbHVlcywgdGhpcy5wcm9wcy5uYW1lKSB8fFxuICAgICAgICAgICAgZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpICE9PVxuICAgICAgICAgICAgICAgIGdldEluKHByb3BzLmZvcm1pay5lcnJvcnMsIHRoaXMucHJvcHMubmFtZSkgfHxcbiAgICAgICAgICAgIGdldEluKHRoaXMucHJvcHMuZm9ybWlrLnRvdWNoZWQsIHRoaXMucHJvcHMubmFtZSkgIT09XG4gICAgICAgICAgICAgICAgZ2V0SW4ocHJvcHMuZm9ybWlrLnRvdWNoZWQsIHRoaXMucHJvcHMubmFtZSkgfHxcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsuaXNTdWJtaXR0aW5nICE9PSBwcm9wcy5mb3JtaWsuaXNTdWJtaXR0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRmFzdEZpZWxkSW5uZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwgdGhpcyk7XG4gICAgfTtcbiAgICBGYXN0RmllbGRJbm5lci5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5uYW1lICE9PSBwcmV2UHJvcHMubmFtZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsudW5yZWdpc3RlckZpZWxkKHByZXZQcm9wcy5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy52YWxpZGF0ZSAhPT0gcHJldlByb3BzLnZhbGlkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZhc3RGaWVsZElubmVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtaWsudW5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSk7XG4gICAgfTtcbiAgICBGYXN0RmllbGRJbm5lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCB2YWxpZGF0ZSA9IF9hLnZhbGlkYXRlLCBuYW1lID0gX2EubmFtZSwgcmVuZGVyID0gX2EucmVuZGVyLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBfYiA9IF9hLmNvbXBvbmVudCwgY29tcG9uZW50ID0gX2IgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfYiwgZm9ybWlrID0gX2EuZm9ybWlrLCBwcm9wcyA9IHRzbGliXzEuX19yZXN0KF9hLCBbXCJ2YWxpZGF0ZVwiLCBcIm5hbWVcIiwgXCJyZW5kZXJcIiwgXCJjaGlsZHJlblwiLCBcImNvbXBvbmVudFwiLCBcImZvcm1pa1wiXSk7XG4gICAgICAgIHZhciBfdmFsaWRhdGUgPSBmb3JtaWsudmFsaWRhdGUsIF92YWxpZGF0aW9uU2NoZW1hID0gZm9ybWlrLnZhbGlkYXRpb25TY2hlbWEsIHJlc3RPZkZvcm1payA9IHRzbGliXzEuX19yZXN0KGZvcm1paywgW1widmFsaWRhdGVcIiwgXCJ2YWxpZGF0aW9uU2NoZW1hXCJdKTtcbiAgICAgICAgdmFyIGZpZWxkID0ge1xuICAgICAgICAgICAgdmFsdWU6IHByb3BzLnR5cGUgPT09ICdyYWRpbycgfHwgcHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94J1xuICAgICAgICAgICAgICAgID8gcHJvcHMudmFsdWVcbiAgICAgICAgICAgICAgICA6IGdldEluKGZvcm1pay52YWx1ZXMsIG5hbWUpLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmb3JtaWsuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgb25CbHVyOiBmb3JtaWsuaGFuZGxlQmx1cixcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGJhZyA9IHsgZmllbGQ6IGZpZWxkLCBmb3JtOiByZXN0T2ZGb3JtaWsgfTtcbiAgICAgICAgaWYgKHJlbmRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcihiYWcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkcmVuKGJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZiwgcmVzdCA9IHRzbGliXzEuX19yZXN0KHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHRzbGliXzEuX19hc3NpZ24oeyByZWY6IGlubmVyUmVmIH0sIGZpZWxkLCByZXN0LCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCB0c2xpYl8xLl9fYXNzaWduKHt9LCBiYWcsIHByb3BzLCB7IGNoaWxkcmVuOiBjaGlsZHJlbiB9KSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmFzdEZpZWxkSW5uZXI7XG59KFJlYWN0LkNvbXBvbmVudCkpO1xudmFyIEZhc3RGaWVsZCA9IGNvbm5lY3QoRmFzdEZpZWxkSW5uZXIpO1xuXG52YXIgRXJyb3JNZXNzYWdlSW1wbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRXJyb3JNZXNzYWdlSW1wbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBFcnJvck1lc3NhZ2VJbXBsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEVycm9yTWVzc2FnZUltcGwucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICBpZiAoZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpICE9PVxuICAgICAgICAgICAgZ2V0SW4ocHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSB8fFxuICAgICAgICAgICAgZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsudG91Y2hlZCwgdGhpcy5wcm9wcy5uYW1lKSAhPT1cbiAgICAgICAgICAgICAgICBnZXRJbihwcm9wcy5mb3JtaWsudG91Y2hlZCwgdGhpcy5wcm9wcy5uYW1lKSB8fFxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRXJyb3JNZXNzYWdlSW1wbC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBjb21wb25lbnQgPSBfYS5jb21wb25lbnQsIGZvcm1payA9IF9hLmZvcm1paywgcmVuZGVyID0gX2EucmVuZGVyLCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBuYW1lID0gX2EubmFtZSwgcmVzdCA9IHRzbGliXzEuX19yZXN0KF9hLCBbXCJjb21wb25lbnRcIiwgXCJmb3JtaWtcIiwgXCJyZW5kZXJcIiwgXCJjaGlsZHJlblwiLCBcIm5hbWVcIl0pO1xuICAgICAgICB2YXIgdG91Y2ggPSBnZXRJbihmb3JtaWsudG91Y2hlZCwgbmFtZSk7XG4gICAgICAgIHZhciBlcnJvciA9IGdldEluKGZvcm1pay5lcnJvcnMsIG5hbWUpO1xuICAgICAgICByZXR1cm4gISF0b3VjaCAmJiAhIWVycm9yXG4gICAgICAgICAgICA/IHJlbmRlclxuICAgICAgICAgICAgICAgID8gaXNGdW5jdGlvbihyZW5kZXIpID8gcmVuZGVyKGVycm9yKSA6IG51bGxcbiAgICAgICAgICAgICAgICA6IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgID8gaXNGdW5jdGlvbihjaGlsZHJlbikgPyBjaGlsZHJlbihlcnJvcikgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIDogY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCByZXN0LCBlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3JcbiAgICAgICAgICAgIDogbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBFcnJvck1lc3NhZ2VJbXBsO1xufShSZWFjdC5Db21wb25lbnQpKTtcbnZhciBFcnJvck1lc3NhZ2UgPSBjb25uZWN0KEVycm9yTWVzc2FnZUltcGwpO1xuXG5leHBvcnRzLkZvcm1payA9IEZvcm1paztcbmV4cG9ydHMueXVwVG9Gb3JtRXJyb3JzID0geXVwVG9Gb3JtRXJyb3JzO1xuZXhwb3J0cy52YWxpZGF0ZVl1cFNjaGVtYSA9IHZhbGlkYXRlWXVwU2NoZW1hO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5Gb3JtID0gRm9ybTtcbmV4cG9ydHMud2l0aEZvcm1payA9IHdpdGhGb3JtaWs7XG5leHBvcnRzLm1vdmUgPSBtb3ZlO1xuZXhwb3J0cy5zd2FwID0gc3dhcDtcbmV4cG9ydHMuaW5zZXJ0ID0gaW5zZXJ0O1xuZXhwb3J0cy5yZXBsYWNlID0gcmVwbGFjZTtcbmV4cG9ydHMuRmllbGRBcnJheSA9IEZpZWxkQXJyYXk7XG5leHBvcnRzLmdldEluID0gZ2V0SW47XG5leHBvcnRzLnNldEluID0gc2V0SW47XG5leHBvcnRzLnNldE5lc3RlZE9iamVjdFZhbHVlcyA9IHNldE5lc3RlZE9iamVjdFZhbHVlcztcbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5leHBvcnRzLmlzSW50ZWdlciA9IGlzSW50ZWdlcjtcbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcbmV4cG9ydHMuaXNOYU4gPSBpc05hTjtcbmV4cG9ydHMuaXNFbXB0eUNoaWxkcmVuID0gaXNFbXB0eUNoaWxkcmVuO1xuZXhwb3J0cy5pc1Byb21pc2UgPSBpc1Byb21pc2U7XG5leHBvcnRzLmdldEFjdGl2ZUVsZW1lbnQgPSBnZXRBY3RpdmVFbGVtZW50O1xuZXhwb3J0cy5GYXN0RmllbGQgPSBGYXN0RmllbGQ7XG5leHBvcnRzLkZvcm1pa1Byb3ZpZGVyID0gRm9ybWlrUHJvdmlkZXI7XG5leHBvcnRzLkZvcm1pa0NvbnN1bWVyID0gRm9ybWlrQ29uc3VtZXI7XG5leHBvcnRzLmNvbm5lY3QgPSBjb25uZWN0O1xuZXhwb3J0cy5FcnJvck1lc3NhZ2UgPSBFcnJvck1lc3NhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtaWsuY2pzLmRldmVsb3BtZW50LmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mb3JtaWsuY2pzLnByb2R1Y3Rpb24uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mb3JtaWsuY2pzLmRldmVsb3BtZW50LmpzJyk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBjb250ZXh0VHlwZXM6IHRydWUsXG4gICAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgICBuYW1lOiB0cnVlLFxuICAgIGxlbmd0aDogdHJ1ZSxcbiAgICBwcm90b3R5cGU6IHRydWUsXG4gICAgY2FsbGVyOiB0cnVlLFxuICAgIGNhbGxlZTogdHJ1ZSxcbiAgICBhcmd1bWVudHM6IHRydWUsXG4gICAgYXJpdHk6IHRydWVcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mICYmIGdldFByb3RvdHlwZU9mKE9iamVjdCk7XG5cbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAoIWJsYWNrbGlzdCB8fCAhYmxhY2tsaXN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCIvLyBAZmxvd1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIga2V5ID0gJ19fZ2xvYmFsX3VuaXF1ZV9pZF9fJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGdsb2JhbFtrZXldID0gKGdsb2JhbFtrZXldIHx8IDApICsgMTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjU4KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMTkpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSgxODYpOyIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKCFpc0Fycikge1xuICAgIHZhciBwcm9wcyA9IGlzRnVsbCA/IGdldEFsbEtleXModmFsdWUpIDoga2V5cyh2YWx1ZSk7XG4gIH1cbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGUgVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90bykgPyBvYmplY3RDcmVhdGUocHJvdG8pIDoge307XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBidWZmZXIuY29uc3RydWN0b3IoYnVmZmVyLmxlbmd0aCk7XG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgdHJ1ZSkgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIHRydWUpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvKipcbiAqIGxvZGFzaCAoQ3VzdG9tIEJ1aWxkKSA8aHR0cHM6Ly9sb2Rhc2guY29tLz5cbiAqIEJ1aWxkOiBgbG9kYXNoIG1vZHVsYXJpemUgZXhwb3J0cz1cIm5wbVwiIC1vIC4vYFxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnMgPGh0dHBzOi8vanF1ZXJ5Lm9yZy8+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZSA8aHR0cHM6Ly9sb2Rhc2guY29tL2xpY2Vuc2U+XG4gKiBCYXNlZCBvbiBVbmRlcnNjb3JlLmpzIDEuOC4zIDxodHRwOi8vdW5kZXJzY29yZWpzLm9yZy9MSUNFTlNFPlxuICogQ29weXJpZ2h0IEplcmVteSBBc2hrZW5hcywgRG9jdW1lbnRDbG91ZCBhbmQgSW52ZXN0aWdhdGl2ZSBSZXBvcnRlcnMgJiBFZGl0b3JzXG4gKi9cblxuLyoqIFVzZWQgYXMgdGhlIGBUeXBlRXJyb3JgIG1lc3NhZ2UgZm9yIFwiRnVuY3Rpb25zXCIgbWV0aG9kcy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUxlYWRpbmdEb3QgPSAvXlxcLi8sXG4gICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplKGZ1bmN0aW9uKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBBc3NpZ24gY2FjaGUgdG8gYF8ubWVtb2l6ZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1BhdGgoJ2EuYi5jJyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ11cbiAqXG4gKiBfLnRvUGF0aCgnYVswXS5iLmMnKTtcbiAqIC8vID0+IFsnYScsICcwJywgJ2InLCAnYyddXG4gKi9cbmZ1bmN0aW9uIHRvUGF0aCh2YWx1ZSkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIHRvS2V5KTtcbiAgfVxuICByZXR1cm4gaXNTeW1ib2wodmFsdWUpID8gW3ZhbHVlXSA6IGNvcHlBcnJheShzdHJpbmdUb1BhdGgodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjQwKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjQ0KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoNyk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKDQ3OSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIga2V5TGlzdCA9IE9iamVjdC5rZXlzO1xudmFyIGhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICB2YXIgYXJyQSA9IGlzQXJyYXkoYSlcbiAgICAsIGFyckIgPSBpc0FycmF5KGIpXG4gICAgLCBpXG4gICAgLCBsZW5ndGhcbiAgICAsIGtleTtcblxuICBpZiAoYXJyQSAmJiBhcnJCKSB7XG4gICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICB2YXIgZGF0ZUEgPSBhIGluc3RhbmNlb2YgRGF0ZVxuICAgICwgZGF0ZUIgPSBiIGluc3RhbmNlb2YgRGF0ZTtcbiAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gIGlmIChkYXRlQSAmJiBkYXRlQikgcmV0dXJuIGEuZ2V0VGltZSgpID09IGIuZ2V0VGltZSgpO1xuXG4gIHZhciByZWdleHBBID0gYSBpbnN0YW5jZW9mIFJlZ0V4cFxuICAgICwgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gIGlmIChyZWdleHBBICE9IHJlZ2V4cEIpIHJldHVybiBmYWxzZTtcbiAgaWYgKHJlZ2V4cEEgJiYgcmVnZXhwQikgcmV0dXJuIGEudG9TdHJpbmcoKSA9PSBiLnRvU3RyaW5nKCk7XG5cbiAgaWYgKGEgaW5zdGFuY2VvZiBPYmplY3QgJiYgYiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIHZhciBrZXlzID0ga2V5TGlzdChhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggIT09IGtleUxpc3QoYikubGVuZ3RoKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgaWYgKCFoYXNQcm9wLmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmIChrZXkgPT09ICdfb3duZXInICYmIGEuJCR0eXBlb2YgJiYgYS5fc3RvcmUpIHtcbiAgICAgICAgLy8gUmVhY3Qtc3BlY2lmaWM6IGF2b2lkIHRyYXZlcnNpbmcgUmVhY3QgZWxlbWVudHMnIF9vd25lci5cbiAgICAgICAgLy8gIF9vd25lciBjb250YWlucyBjaXJjdWxhciByZWZlcmVuY2VzXG4gICAgICAgIC8vIGFuZCBpcyBub3QgbmVlZGVkIHdoZW4gY29tcGFyaW5nIHRoZSBhY3R1YWwgZWxlbWVudHMgKGFuZCBub3QgdGhlaXIgb3duZXJzKVxuICAgICAgICAvLyAuJCR0eXBlb2YgYW5kIC5fc3RvcmUgb24ganVzdCByZWFzb25hYmxlIG1hcmtlcnMgb2YgYSByZWFjdCBlbGVtZW50XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWxsIG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIHRyYXZlcnNlZCBhcyB1c3VhbFxuICAgICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cG9ydGVkRXF1YWwoYSwgYikge1xuICB0cnkge1xuICAgIHJldHVybiBlcXVhbChhLCBiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubWVzc2FnZSAmJiBlcnJvci5tZXNzYWdlLm1hdGNoKC9zdGFja3xyZWN1cnNpb24vaSkpIHtcbiAgICAgIC8vIHdhcm4gb24gY2lyY3VsYXIgcmVmZXJlbmNlcywgZG9uJ3QgY3Jhc2hcbiAgICAgIC8vIGJyb3dzZXJzIGdpdmUgdGhpcyBkaWZmZXJlbnQgZXJyb3JzIG5hbWUgYW5kIG1lc3NhZ2VzOlxuICAgICAgLy8gY2hyb21lL3NhZmFyaTogXCJSYW5nZUVycm9yXCIsIFwiTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIlxuICAgICAgLy8gZmlyZWZveDogXCJJbnRlcm5hbEVycm9yXCIsIHRvbyBtdWNoIHJlY3Vyc2lvblwiXG4gICAgICAvLyBlZGdlOiBcIkVycm9yXCIsIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCJcbiAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogcmVhY3QtZmFzdC1jb21wYXJlIGRvZXMgbm90IGhhbmRsZSBjaXJjdWxhciByZWZlcmVuY2VzLicsIGVycm9yLm5hbWUsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjk5KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMTg5KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMTQzKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaGlzdG9yeSA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpO1xuXG52YXIgX1JvdXRlciA9IHJlcXVpcmUoXCIuL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyBIVE1MNSBoaXN0b3J5LlxuICovXG52YXIgQnJvd3NlclJvdXRlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhCcm93c2VyUm91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCcm93c2VyUm91dGVyKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJvd3NlclJvdXRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbC5hcHBseShfUmVhY3QkQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuaGlzdG9yeSA9ICgwLCBfaGlzdG9yeS5jcmVhdGVCcm93c2VySGlzdG9yeSkoX3RoaXMucHJvcHMpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIEJyb3dzZXJSb3V0ZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPEJyb3dzZXJSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9YC5cIik7XG4gIH07XG5cbiAgQnJvd3NlclJvdXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGVyMi5kZWZhdWx0LCB7IGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSwgY2hpbGRyZW46IHRoaXMucHJvcHMuY2hpbGRyZW4gfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJyb3dzZXJSb3V0ZXI7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXG5Ccm93c2VyUm91dGVyLnByb3BUeXBlcyA9IHtcbiAgYmFzZW5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBmb3JjZVJlZnJlc2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBrZXlMZW5ndGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gQnJvd3NlclJvdXRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZShcIndhcm5pbmdcIik7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfaGlzdG9yeSA9IHJlcXVpcmUoXCJoaXN0b3J5XCIpO1xuXG52YXIgX1JvdXRlciA9IHJlcXVpcmUoXCIuL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBhIDxSb3V0ZXI+IHRoYXQgdXNlcyB3aW5kb3cubG9jYXRpb24uaGFzaC5cbiAqL1xudmFyIEhhc2hSb3V0ZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSGFzaFJvdXRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSGFzaFJvdXRlcigpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hSb3V0ZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhpc3RvcnkgPSAoMCwgX2hpc3RvcnkuY3JlYXRlSGFzaEhpc3RvcnkpKF90aGlzLnByb3BzKSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBIYXNoUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxIYXNoUm91dGVyPiBpZ25vcmVzIHRoZSBoaXN0b3J5IHByb3AuIFRvIHVzZSBhIGN1c3RvbSBoaXN0b3J5LCBcIiArIFwidXNlIGBpbXBvcnQgeyBSb3V0ZXIgfWAgaW5zdGVhZCBvZiBgaW1wb3J0IHsgSGFzaFJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpO1xuICB9O1xuXG4gIEhhc2hSb3V0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlcjIuZGVmYXVsdCwgeyBoaXN0b3J5OiB0aGlzLmhpc3RvcnksIGNoaWxkcmVuOiB0aGlzLnByb3BzLmNoaWxkcmVuIH0pO1xuICB9O1xuXG4gIHJldHVybiBIYXNoUm91dGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuSGFzaFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gIGJhc2VuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBoYXNoVHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbXCJoYXNoYmFuZ1wiLCBcIm5vc2xhc2hcIiwgXCJzbGFzaFwiXSksXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBIYXNoUm91dGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX2hpc3RvcnkgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBpc01vZGlmaWVkRXZlbnQgPSBmdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufTtcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIGEgaGlzdG9yeS1hd2FyZSA8YT4uXG4gKi9cblxudmFyIExpbmsgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DbGljaykgX3RoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgICBldmVudC5idXR0b24gPT09IDAgJiYgLy8gaWdub3JlIGV2ZXJ5dGhpbmcgYnV0IGxlZnQgY2xpY2tzXG4gICAgICAhX3RoaXMucHJvcHMudGFyZ2V0ICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBpZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICAgICAgKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHZhciBoaXN0b3J5ID0gX3RoaXMuY29udGV4dC5yb3V0ZXIuaGlzdG9yeTtcbiAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2UsXG4gICAgICAgICAgICAgIHRvID0gX3RoaXMkcHJvcHMudG87XG5cblxuICAgICAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgICAgICBoaXN0b3J5LnJlcGxhY2UodG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoaXN0b3J5LnB1c2godG8pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgTGluay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICByZXBsYWNlID0gX3Byb3BzLnJlcGxhY2UsXG4gICAgICAgIHRvID0gX3Byb3BzLnRvLFxuICAgICAgICBpbm5lclJlZiA9IF9wcm9wcy5pbm5lclJlZixcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbXCJyZXBsYWNlXCIsIFwidG9cIiwgXCJpbm5lclJlZlwiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuICAgICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KSh0aGlzLmNvbnRleHQucm91dGVyLCBcIllvdSBzaG91bGQgbm90IHVzZSA8TGluaz4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpO1xuXG4gICAgKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKHRvICE9PSB1bmRlZmluZWQsICdZb3UgbXVzdCBzcGVjaWZ5IHRoZSBcInRvXCIgcHJvcGVydHknKTtcblxuICAgIHZhciBoaXN0b3J5ID0gdGhpcy5jb250ZXh0LnJvdXRlci5oaXN0b3J5O1xuXG4gICAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gKDAsIF9oaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKSh0bywgbnVsbCwgbnVsbCwgaGlzdG9yeS5sb2NhdGlvbikgOiB0bztcblxuICAgIHZhciBocmVmID0gaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKTtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCBwcm9wcywgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLCBocmVmOiBocmVmLCByZWY6IGlubmVyUmVmIH0pKTtcbiAgfTtcblxuICByZXR1cm4gTGluaztcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkxpbmsucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHRhcmdldDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHJlcGxhY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgdG86IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICBpbm5lclJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmNdKVxufTtcbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICByZXBsYWNlOiBmYWxzZVxufTtcbkxpbmsuY29udGV4dFR5cGVzID0ge1xuICByb3V0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgIGhpc3Rvcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoe1xuICAgICAgcHVzaDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZXBsYWNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGNyZWF0ZUhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYy5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTGluazsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9NZW1vcnlSb3V0ZXIgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL01lbW9yeVJvdXRlclwiKTtcblxudmFyIF9NZW1vcnlSb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVtb3J5Um91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX01lbW9yeVJvdXRlcjIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9Sb3V0ZSA9IHJlcXVpcmUoXCIuL1JvdXRlXCIpO1xuXG52YXIgX1JvdXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlKTtcblxudmFyIF9MaW5rID0gcmVxdWlyZShcIi4vTGlua1wiKTtcblxudmFyIF9MaW5rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpbmspO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qKlxuICogQSA8TGluaz4gd3JhcHBlciB0aGF0IGtub3dzIGlmIGl0J3MgXCJhY3RpdmVcIiBvciBub3QuXG4gKi9cbnZhciBOYXZMaW5rID0gZnVuY3Rpb24gTmF2TGluayhfcmVmKSB7XG4gIHZhciB0byA9IF9yZWYudG8sXG4gICAgICBleGFjdCA9IF9yZWYuZXhhY3QsXG4gICAgICBzdHJpY3QgPSBfcmVmLnN0cmljdCxcbiAgICAgIGxvY2F0aW9uID0gX3JlZi5sb2NhdGlvbixcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSA9IF9yZWYuYWN0aXZlQ2xhc3NOYW1lLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBhY3RpdmVTdHlsZSA9IF9yZWYuYWN0aXZlU3R5bGUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBnZXRJc0FjdGl2ZSA9IF9yZWYuaXNBY3RpdmUsXG4gICAgICBhcmlhQ3VycmVudCA9IF9yZWZbXCJhcmlhLWN1cnJlbnRcIl0sXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcInRvXCIsIFwiZXhhY3RcIiwgXCJzdHJpY3RcIiwgXCJsb2NhdGlvblwiLCBcImFjdGl2ZUNsYXNzTmFtZVwiLCBcImNsYXNzTmFtZVwiLCBcImFjdGl2ZVN0eWxlXCIsIFwic3R5bGVcIiwgXCJpc0FjdGl2ZVwiLCBcImFyaWEtY3VycmVudFwiXSk7XG5cbiAgdmFyIHBhdGggPSAodHlwZW9mIHRvID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YodG8pKSA9PT0gXCJvYmplY3RcIiA/IHRvLnBhdGhuYW1lIDogdG87XG5cbiAgLy8gUmVnZXggdGFrZW4gZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL3BpbGxhcmpzL3BhdGgtdG8tcmVnZXhwL2Jsb2IvbWFzdGVyL2luZGV4LmpzI0wyMDJcbiAgdmFyIGVzY2FwZWRQYXRoID0gcGF0aCAmJiBwYXRoLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JvdXRlMi5kZWZhdWx0LCB7XG4gICAgcGF0aDogZXNjYXBlZFBhdGgsXG4gICAgZXhhY3Q6IGV4YWN0LFxuICAgIHN0cmljdDogc3RyaWN0LFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24gY2hpbGRyZW4oX3JlZjIpIHtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF9yZWYyLmxvY2F0aW9uLFxuICAgICAgICAgIG1hdGNoID0gX3JlZjIubWF0Y2g7XG5cbiAgICAgIHZhciBpc0FjdGl2ZSA9ICEhKGdldElzQWN0aXZlID8gZ2V0SXNBY3RpdmUobWF0Y2gsIGxvY2F0aW9uKSA6IG1hdGNoKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9MaW5rMi5kZWZhdWx0LCBfZXh0ZW5kcyh7XG4gICAgICAgIHRvOiB0byxcbiAgICAgICAgY2xhc3NOYW1lOiBpc0FjdGl2ZSA/IFtjbGFzc05hbWUsIGFjdGl2ZUNsYXNzTmFtZV0uZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pLmpvaW4oXCIgXCIpIDogY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZTogaXNBY3RpdmUgPyBfZXh0ZW5kcyh7fSwgc3R5bGUsIGFjdGl2ZVN0eWxlKSA6IHN0eWxlLFxuICAgICAgICBcImFyaWEtY3VycmVudFwiOiBpc0FjdGl2ZSAmJiBhcmlhQ3VycmVudCB8fCBudWxsXG4gICAgICB9LCByZXN0KSk7XG4gICAgfVxuICB9KTtcbn07XG5cbk5hdkxpbmsucHJvcFR5cGVzID0ge1xuICB0bzogX0xpbmsyLmRlZmF1bHQucHJvcFR5cGVzLnRvLFxuICBleGFjdDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzdHJpY3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgbG9jYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBhY3RpdmVDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhY3RpdmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgaXNBY3RpdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgXCJhcmlhLWN1cnJlbnRcIjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbXCJwYWdlXCIsIFwic3RlcFwiLCBcImxvY2F0aW9uXCIsIFwiZGF0ZVwiLCBcInRpbWVcIiwgXCJ0cnVlXCJdKVxufTtcblxuTmF2TGluay5kZWZhdWx0UHJvcHMgPSB7XG4gIGFjdGl2ZUNsYXNzTmFtZTogXCJhY3RpdmVcIixcbiAgXCJhcmlhLWN1cnJlbnRcIjogXCJwYWdlXCJcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5hdkxpbms7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvbXB0ID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9Qcm9tcHRcIik7XG5cbnZhciBfUHJvbXB0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb21wdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Qcm9tcHQyLmRlZmF1bHQ7IC8vIFdyaXR0ZW4gaW4gdGhpcyByb3VuZCBhYm91dCB3YXkgZm9yIGJhYmVsLXRyYW5zZm9ybS1pbXBvcnRzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUmVkaXJlY3QgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1JlZGlyZWN0XCIpO1xuXG52YXIgX1JlZGlyZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlZGlyZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JlZGlyZWN0Mi5kZWZhdWx0OyAvLyBXcml0dGVuIGluIHRoaXMgcm91bmQgYWJvdXQgd2F5IGZvciBiYWJlbC10cmFuc2Zvcm0taW1wb3J0cyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1JvdXRlID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci9Sb3V0ZVwiKTtcblxudmFyIF9Sb3V0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9Sb3V0ZTIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Sb3V0ZXIgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1JvdXRlclwiKTtcblxudmFyIF9Sb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JvdXRlcjIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9TdGF0aWNSb3V0ZXIgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1N0YXRpY1JvdXRlclwiKTtcblxudmFyIF9TdGF0aWNSb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3RhdGljUm91dGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1N0YXRpY1JvdXRlcjIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Td2l0Y2ggPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL1N3aXRjaFwiKTtcblxudmFyIF9Td2l0Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3dpdGNoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1N3aXRjaDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZW5lcmF0ZVBhdGggPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL2dlbmVyYXRlUGF0aFwiKTtcblxudmFyIF9nZW5lcmF0ZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVQYXRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2dlbmVyYXRlUGF0aDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMud2l0aFJvdXRlciA9IGV4cG9ydHMubWF0Y2hQYXRoID0gZXhwb3J0cy5nZW5lcmF0ZVBhdGggPSBleHBvcnRzLlN3aXRjaCA9IGV4cG9ydHMuU3RhdGljUm91dGVyID0gZXhwb3J0cy5Sb3V0ZXIgPSBleHBvcnRzLlJvdXRlID0gZXhwb3J0cy5SZWRpcmVjdCA9IGV4cG9ydHMuUHJvbXB0ID0gZXhwb3J0cy5OYXZMaW5rID0gZXhwb3J0cy5NZW1vcnlSb3V0ZXIgPSBleHBvcnRzLkxpbmsgPSBleHBvcnRzLkhhc2hSb3V0ZXIgPSBleHBvcnRzLkJyb3dzZXJSb3V0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfQnJvd3NlclJvdXRlcjIgPSByZXF1aXJlKFwiLi9Ccm93c2VyUm91dGVyXCIpO1xuXG52YXIgX0Jyb3dzZXJSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQnJvd3NlclJvdXRlcjIpO1xuXG52YXIgX0hhc2hSb3V0ZXIyID0gcmVxdWlyZShcIi4vSGFzaFJvdXRlclwiKTtcblxudmFyIF9IYXNoUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0hhc2hSb3V0ZXIyKTtcblxudmFyIF9MaW5rMiA9IHJlcXVpcmUoXCIuL0xpbmtcIik7XG5cbnZhciBfTGluazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rMik7XG5cbnZhciBfTWVtb3J5Um91dGVyMiA9IHJlcXVpcmUoXCIuL01lbW9yeVJvdXRlclwiKTtcblxudmFyIF9NZW1vcnlSb3V0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVtb3J5Um91dGVyMik7XG5cbnZhciBfTmF2TGluazIgPSByZXF1aXJlKFwiLi9OYXZMaW5rXCIpO1xuXG52YXIgX05hdkxpbmszID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTmF2TGluazIpO1xuXG52YXIgX1Byb21wdDIgPSByZXF1aXJlKFwiLi9Qcm9tcHRcIik7XG5cbnZhciBfUHJvbXB0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb21wdDIpO1xuXG52YXIgX1JlZGlyZWN0MiA9IHJlcXVpcmUoXCIuL1JlZGlyZWN0XCIpO1xuXG52YXIgX1JlZGlyZWN0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlZGlyZWN0Mik7XG5cbnZhciBfUm91dGUyID0gcmVxdWlyZShcIi4vUm91dGVcIik7XG5cbnZhciBfUm91dGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGUyKTtcblxudmFyIF9Sb3V0ZXIyID0gcmVxdWlyZShcIi4vUm91dGVyXCIpO1xuXG52YXIgX1JvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZXIyKTtcblxudmFyIF9TdGF0aWNSb3V0ZXIyID0gcmVxdWlyZShcIi4vU3RhdGljUm91dGVyXCIpO1xuXG52YXIgX1N0YXRpY1JvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdGF0aWNSb3V0ZXIyKTtcblxudmFyIF9Td2l0Y2gyID0gcmVxdWlyZShcIi4vU3dpdGNoXCIpO1xuXG52YXIgX1N3aXRjaDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Td2l0Y2gyKTtcblxudmFyIF9nZW5lcmF0ZVBhdGgyID0gcmVxdWlyZShcIi4vZ2VuZXJhdGVQYXRoXCIpO1xuXG52YXIgX2dlbmVyYXRlUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZVBhdGgyKTtcblxudmFyIF9tYXRjaFBhdGgyID0gcmVxdWlyZShcIi4vbWF0Y2hQYXRoXCIpO1xuXG52YXIgX21hdGNoUGF0aDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXRjaFBhdGgyKTtcblxudmFyIF93aXRoUm91dGVyMiA9IHJlcXVpcmUoXCIuL3dpdGhSb3V0ZXJcIik7XG5cbnZhciBfd2l0aFJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUm91dGVyMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQnJvd3NlclJvdXRlciA9IF9Ccm93c2VyUm91dGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5IYXNoUm91dGVyID0gX0hhc2hSb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLkxpbmsgPSBfTGluazMuZGVmYXVsdDtcbmV4cG9ydHMuTWVtb3J5Um91dGVyID0gX01lbW9yeVJvdXRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuTmF2TGluayA9IF9OYXZMaW5rMy5kZWZhdWx0O1xuZXhwb3J0cy5Qcm9tcHQgPSBfUHJvbXB0My5kZWZhdWx0O1xuZXhwb3J0cy5SZWRpcmVjdCA9IF9SZWRpcmVjdDMuZGVmYXVsdDtcbmV4cG9ydHMuUm91dGUgPSBfUm91dGUzLmRlZmF1bHQ7XG5leHBvcnRzLlJvdXRlciA9IF9Sb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLlN0YXRpY1JvdXRlciA9IF9TdGF0aWNSb3V0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLlN3aXRjaCA9IF9Td2l0Y2gzLmRlZmF1bHQ7XG5leHBvcnRzLmdlbmVyYXRlUGF0aCA9IF9nZW5lcmF0ZVBhdGgzLmRlZmF1bHQ7XG5leHBvcnRzLm1hdGNoUGF0aCA9IF9tYXRjaFBhdGgzLmRlZmF1bHQ7XG5leHBvcnRzLndpdGhSb3V0ZXIgPSBfd2l0aFJvdXRlcjMuZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9tYXRjaFBhdGggPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyL21hdGNoUGF0aFwiKTtcblxudmFyIF9tYXRjaFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hQYXRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX21hdGNoUGF0aDIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gZXhwb3J0cy5jYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG52YXIgYWRkRXZlbnRMaXN0ZW5lciA9IGV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBub2RlLmFkZEV2ZW50TGlzdGVuZXIgPyBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSkgOiBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xufTtcblxudmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBleHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICByZXR1cm4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyID8gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpIDogbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbn07XG5cbnZhciBnZXRDb25maXJtYXRpb24gPSBleHBvcnRzLmdldENvbmZpcm1hdGlvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICByZXR1cm4gY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1hbGVydFxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG52YXIgc3VwcG9ydHNIaXN0b3J5ID0gZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBmdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJiAncHVzaFN0YXRlJyBpbiB3aW5kb3cuaGlzdG9yeTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGJyb3dzZXIgZmlyZXMgcG9wc3RhdGUgb24gaGFzaCBjaGFuZ2UuXG4gKiBJRTEwIGFuZCBJRTExIGRvIG5vdC5cbiAqL1xudmFyIHN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UgPSBleHBvcnRzLnN1cHBvcnRzUG9wU3RhdGVPbkhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBzdXBwb3J0c1BvcFN0YXRlT25IYXNoQ2hhbmdlKCkge1xuICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpID09PSAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG52YXIgc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBleHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gZnVuY3Rpb24gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2goKSB7XG4gIHJldHVybiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPT09IC0xO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgYSBnaXZlbiBwb3BzdGF0ZSBldmVudCBpcyBhbiBleHRyYW5lb3VzIFdlYktpdCBldmVudC5cbiAqIEFjY291bnRzIGZvciB0aGUgZmFjdCB0aGF0IENocm9tZSBvbiBpT1MgZmlyZXMgcmVhbCBwb3BzdGF0ZSBldmVudHNcbiAqIGNvbnRhaW5pbmcgdW5kZWZpbmVkIHN0YXRlIHdoZW4gcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uLlxuICovXG52YXIgaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCA9IGV4cG9ydHMuaXNFeHRyYW5lb3VzUG9wc3RhdGVFdmVudCA9IGZ1bmN0aW9uIGlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDcmlPUycpID09PSAtMTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVzb2x2ZVBhdGhuYW1lID0gcmVxdWlyZSgncmVzb2x2ZS1wYXRobmFtZScpO1xuXG52YXIgX3Jlc29sdmVQYXRobmFtZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlUGF0aG5hbWUpO1xuXG52YXIgX3ZhbHVlRXF1YWwgPSByZXF1aXJlKCd2YWx1ZS1lcXVhbCcpO1xuXG52YXIgX3ZhbHVlRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVFcXVhbCk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNyZWF0ZUxvY2F0aW9uID0gZXhwb3J0cy5jcmVhdGVMb2NhdGlvbiA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhdGgsIHN0YXRlLCBrZXksIGN1cnJlbnRMb2NhdGlvbikge1xuICB2YXIgbG9jYXRpb24gPSB2b2lkIDA7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBUd28tYXJnIGZvcm06IHB1c2gocGF0aCwgc3RhdGUpXG4gICAgbG9jYXRpb24gPSAoMCwgX1BhdGhVdGlscy5wYXJzZVBhdGgpKHBhdGgpO1xuICAgIGxvY2F0aW9uLnN0YXRlID0gc3RhdGU7XG4gIH0gZWxzZSB7XG4gICAgLy8gT25lLWFyZyBmb3JtOiBwdXNoKGxvY2F0aW9uKVxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIHBhdGgpO1xuXG4gICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSB1bmRlZmluZWQpIGxvY2F0aW9uLnBhdGhuYW1lID0gJyc7XG5cbiAgICBpZiAobG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uc2VhcmNoLmNoYXJBdCgwKSAhPT0gJz8nKSBsb2NhdGlvbi5zZWFyY2ggPSAnPycgKyBsb2NhdGlvbi5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLnNlYXJjaCA9ICcnO1xuICAgIH1cblxuICAgIGlmIChsb2NhdGlvbi5oYXNoKSB7XG4gICAgICBpZiAobG9jYXRpb24uaGFzaC5jaGFyQXQoMCkgIT09ICcjJykgbG9jYXRpb24uaGFzaCA9ICcjJyArIGxvY2F0aW9uLmhhc2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCAmJiBsb2NhdGlvbi5zdGF0ZSA9PT0gdW5kZWZpbmVkKSBsb2NhdGlvbi5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGRlY29kZVVSSShsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFVSSUVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgVVJJRXJyb3IoJ1BhdGhuYW1lIFwiJyArIGxvY2F0aW9uLnBhdGhuYW1lICsgJ1wiIGNvdWxkIG5vdCBiZSBkZWNvZGVkLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGNhdXNlZCBieSBhbiBpbnZhbGlkIHBlcmNlbnQtZW5jb2RpbmcuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGtleSkgbG9jYXRpb24ua2V5ID0ga2V5O1xuXG4gIGlmIChjdXJyZW50TG9jYXRpb24pIHtcbiAgICAvLyBSZXNvbHZlIGluY29tcGxldGUvcmVsYXRpdmUgcGF0aG5hbWUgcmVsYXRpdmUgdG8gY3VycmVudCBsb2NhdGlvbi5cbiAgICBpZiAoIWxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gJy8nKSB7XG4gICAgICBsb2NhdGlvbi5wYXRobmFtZSA9ICgwLCBfcmVzb2x2ZVBhdGhuYW1lMi5kZWZhdWx0KShsb2NhdGlvbi5wYXRobmFtZSwgY3VycmVudExvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBwcmlvciBsb2NhdGlvbiBhbmQgcGF0aG5hbWUgaXMgZW1wdHksIHNldCBpdCB0byAvXG4gICAgaWYgKCFsb2NhdGlvbi5wYXRobmFtZSkge1xuICAgICAgbG9jYXRpb24ucGF0aG5hbWUgPSAnLyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufTtcblxudmFyIGxvY2F0aW9uc0FyZUVxdWFsID0gZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCA9PT0gYi5oYXNoICYmIGEua2V5ID09PSBiLmtleSAmJiAoMCwgX3ZhbHVlRXF1YWwyLmRlZmF1bHQpKGEuc3RhdGUsIGIuc3RhdGUpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgYWRkTGVhZGluZ1NsYXNoID0gZXhwb3J0cy5hZGRMZWFkaW5nU2xhc2ggPSBmdW5jdGlvbiBhZGRMZWFkaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJyA/IHBhdGggOiAnLycgKyBwYXRoO1xufTtcblxudmFyIHN0cmlwTGVhZGluZ1NsYXNoID0gZXhwb3J0cy5zdHJpcExlYWRpbmdTbGFzaCA9IGZ1bmN0aW9uIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG59O1xuXG52YXIgaGFzQmFzZW5hbWUgPSBleHBvcnRzLmhhc0Jhc2VuYW1lID0gZnVuY3Rpb24gaGFzQmFzZW5hbWUocGF0aCwgcHJlZml4KSB7XG4gIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHByZWZpeCArICcoXFxcXC98XFxcXD98I3wkKScsICdpJykudGVzdChwYXRoKTtcbn07XG5cbnZhciBzdHJpcEJhc2VuYW1lID0gZXhwb3J0cy5zdHJpcEJhc2VuYW1lID0gZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRoLCBwcmVmaXgpIHtcbiAgcmV0dXJuIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkgPyBwYXRoLnN1YnN0cihwcmVmaXgubGVuZ3RoKSA6IHBhdGg7XG59O1xuXG52YXIgc3RyaXBUcmFpbGluZ1NsYXNoID0gZXhwb3J0cy5zdHJpcFRyYWlsaW5nU2xhc2ggPSBmdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoO1xufTtcblxudmFyIHBhcnNlUGF0aCA9IGV4cG9ydHMucGFyc2VQYXRoID0gZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gcGF0aCB8fCAnLyc7XG4gIHZhciBzZWFyY2ggPSAnJztcbiAgdmFyIGhhc2ggPSAnJztcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHIoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCA9PT0gJz8nID8gJycgOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCA9PT0gJyMnID8gJycgOiBoYXNoXG4gIH07XG59O1xuXG52YXIgY3JlYXRlUGF0aCA9IGV4cG9ydHMuY3JlYXRlUGF0aCA9IGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2gsXG4gICAgICBoYXNoID0gbG9jYXRpb24uaGFzaDtcblxuXG4gIHZhciBwYXRoID0gcGF0aG5hbWUgfHwgJy8nO1xuXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSAnPycpIHBhdGggKz0gc2VhcmNoLmNoYXJBdCgwKSA9PT0gJz8nID8gc2VhcmNoIDogJz8nICsgc2VhcmNoO1xuXG4gIGlmIChoYXNoICYmIGhhc2ggIT09ICcjJykgcGF0aCArPSBoYXNoLmNoYXJBdCgwKSA9PT0gJyMnID8gaGFzaCA6ICcjJyArIGhhc2g7XG5cbiAgcmV0dXJuIHBhdGg7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBQb3BTdGF0ZUV2ZW50ID0gJ3BvcHN0YXRlJztcbnZhciBIYXNoQ2hhbmdlRXZlbnQgPSAnaGFzaGNoYW5nZSc7XG5cbnZhciBnZXRIaXN0b3J5U3RhdGUgPSBmdW5jdGlvbiBnZXRIaXN0b3J5U3RhdGUoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5LnN0YXRlIHx8IHt9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gSUUgMTEgc29tZXRpbWVzIHRocm93cyB3aGVuIGFjY2Vzc2luZyB3aW5kb3cuaGlzdG9yeS5zdGF0ZVxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUmVhY3RUcmFpbmluZy9oaXN0b3J5L3B1bGwvMjg5XG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGluY2x1ZGluZ1xuICogcHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQuXG4gKi9cbnZhciBjcmVhdGVCcm93c2VySGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShfRE9NVXRpbHMuY2FuVXNlRE9NLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJyk7XG5cbiAgdmFyIGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgdmFyIGNhblVzZUhpc3RvcnkgPSAoMCwgX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSkoKTtcbiAgdmFyIG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyID0gISgwLCBfRE9NVXRpbHMuc3VwcG9ydHNQb3BTdGF0ZU9uSGFzaENoYW5nZSkoKTtcblxuICB2YXIgX3Byb3BzJGZvcmNlUmVmcmVzaCA9IHByb3BzLmZvcmNlUmVmcmVzaCxcbiAgICAgIGZvcmNlUmVmcmVzaCA9IF9wcm9wcyRmb3JjZVJlZnJlc2ggPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3Byb3BzJGZvcmNlUmVmcmVzaCxcbiAgICAgIF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9IHByb3BzLmdldFVzZXJDb25maXJtYXRpb24sXG4gICAgICBnZXRVc2VyQ29uZmlybWF0aW9uID0gX3Byb3BzJGdldFVzZXJDb25maXJtID09PSB1bmRlZmluZWQgPyBfRE9NVXRpbHMuZ2V0Q29uZmlybWF0aW9uIDogX3Byb3BzJGdldFVzZXJDb25maXJtLFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IHByb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHVuZGVmaW5lZCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuXG4gIHZhciBiYXNlbmFtZSA9IHByb3BzLmJhc2VuYW1lID8gKDAsIF9QYXRoVXRpbHMuc3RyaXBUcmFpbGluZ1NsYXNoKSgoMCwgX1BhdGhVdGlscy5hZGRMZWFkaW5nU2xhc2gpKHByb3BzLmJhc2VuYW1lKSkgOiAnJztcblxuICB2YXIgZ2V0RE9NTG9jYXRpb24gPSBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICB2YXIgX3JlZiA9IGhpc3RvcnlTdGF0ZSB8fCB7fSxcbiAgICAgICAga2V5ID0gX3JlZi5rZXksXG4gICAgICAgIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICAgIHZhciBfd2luZG93JGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLFxuICAgICAgICBwYXRobmFtZSA9IF93aW5kb3ckbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaCA9IF93aW5kb3ckbG9jYXRpb24uc2VhcmNoLFxuICAgICAgICBoYXNoID0gX3dpbmRvdyRsb2NhdGlvbi5oYXNoO1xuXG5cbiAgICB2YXIgcGF0aCA9IHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcblxuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIWJhc2VuYW1lIHx8ICgwLCBfUGF0aFV0aWxzLmhhc0Jhc2VuYW1lKShwYXRoLCBiYXNlbmFtZSksICdZb3UgYXJlIGF0dGVtcHRpbmcgdG8gdXNlIGEgYmFzZW5hbWUgb24gYSBwYWdlIHdob3NlIFVSTCBwYXRoIGRvZXMgbm90IGJlZ2luICcgKyAnd2l0aCB0aGUgYmFzZW5hbWUuIEV4cGVjdGVkIHBhdGggXCInICsgcGF0aCArICdcIiB0byBiZWdpbiB3aXRoIFwiJyArIGJhc2VuYW1lICsgJ1wiLicpO1xuXG4gICAgaWYgKGJhc2VuYW1lKSBwYXRoID0gKDAsIF9QYXRoVXRpbHMuc3RyaXBCYXNlbmFtZSkocGF0aCwgYmFzZW5hbWUpO1xuXG4gICAgcmV0dXJuICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikocGF0aCwgc3RhdGUsIGtleSk7XG4gIH07XG5cbiAgdmFyIGNyZWF0ZUtleSA9IGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGtleUxlbmd0aCk7XG4gIH07XG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gKDAsIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIuZGVmYXVsdCkoKTtcblxuICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBnbG9iYWxIaXN0b3J5Lmxlbmd0aDtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLm5vdGlmeUxpc3RlbmVycyhoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbik7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcFN0YXRlID0gZnVuY3Rpb24gaGFuZGxlUG9wU3RhdGUoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuICAgIGlmICgoMCwgX0RPTVV0aWxzLmlzRXh0cmFuZW91c1BvcHN0YXRlRXZlbnQpKGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgaGFuZGxlUG9wKGdldERPTUxvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUhhc2hDaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIGhhbmRsZVBvcChnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSkpO1xuICB9O1xuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcblxuICB2YXIgaGFuZGxlUG9wID0gZnVuY3Rpb24gaGFuZGxlUG9wKGxvY2F0aW9uKSB7XG4gICAgaWYgKGZvcmNlTmV4dFBvcCkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gZmFsc2U7XG4gICAgICBzZXRTdGF0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG5cbiAgICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXZlcnRQb3AobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJldmVydFBvcCA9IGZ1bmN0aW9uIHJldmVydFBvcChmcm9tTG9jYXRpb24pIHtcbiAgICB2YXIgdG9Mb2NhdGlvbiA9IGhpc3RvcnkubG9jYXRpb247XG5cbiAgICAvLyBUT0RPOiBXZSBjb3VsZCBwcm9iYWJseSBtYWtlIHRoaXMgbW9yZSByZWxpYWJsZSBieVxuICAgIC8vIGtlZXBpbmcgYSBsaXN0IG9mIGtleXMgd2UndmUgc2VlbiBpbiBzZXNzaW9uU3RvcmFnZS5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBqdXN0IGRlZmF1bHQgdG8gMCBmb3Iga2V5cyB3ZSBkb24ndCBrbm93LlxuXG4gICAgdmFyIHRvSW5kZXggPSBhbGxLZXlzLmluZGV4T2YodG9Mb2NhdGlvbi5rZXkpO1xuXG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcblxuICAgIHZhciBmcm9tSW5kZXggPSBhbGxLZXlzLmluZGV4T2YoZnJvbUxvY2F0aW9uLmtleSk7XG5cbiAgICBpZiAoZnJvbUluZGV4ID09PSAtMSkgZnJvbUluZGV4ID0gMDtcblxuICAgIHZhciBkZWx0YSA9IHRvSW5kZXggLSBmcm9tSW5kZXg7XG5cbiAgICBpZiAoZGVsdGEpIHtcbiAgICAgIGZvcmNlTmV4dFBvcCA9IHRydWU7XG4gICAgICBnbyhkZWx0YSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpbml0aWFsTG9jYXRpb24gPSBnZXRET01Mb2NhdGlvbihnZXRIaXN0b3J5U3RhdGUoKSk7XG4gIHZhciBhbGxLZXlzID0gW2luaXRpYWxMb2NhdGlvbi5rZXldO1xuXG4gIC8vIFB1YmxpYyBpbnRlcmZhY2VcblxuICB2YXIgY3JlYXRlSHJlZiA9IGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gYmFzZW5hbWUgKyAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbik7XG4gIH07XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZSB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YoaGlzdG9yeS5sb2NhdGlvbi5rZXkpO1xuICAgICAgICAgIHZhciBuZXh0S2V5cyA9IGFsbEtleXMuc2xpY2UoMCwgcHJldkluZGV4ID09PSAtMSA/IDAgOiBwcmV2SW5kZXggKyAxKTtcblxuICAgICAgICAgIG5leHRLZXlzLnB1c2gobG9jYXRpb24ua2V5KTtcbiAgICAgICAgICBhbGxLZXlzID0gbmV4dEtleXM7XG5cbiAgICAgICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0Jyb3dzZXIgaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZSBpbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IEhUTUw1IGhpc3RvcnknKTtcblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byByZXBsYWNlIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgaHJlZiA9IGNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleSxcbiAgICAgICAgICBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuXG5cbiAgICAgIGlmIChjYW5Vc2VIaXN0b3J5KSB7XG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZSB9LCBudWxsLCBocmVmKTtcblxuICAgICAgICBpZiAoZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihoaXN0b3J5LmxvY2F0aW9uLmtleSk7XG5cbiAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkgYWxsS2V5c1twcmV2SW5kZXhdID0gbG9jYXRpb24ua2V5O1xuXG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHN0YXRlID09PSB1bmRlZmluZWQsICdCcm93c2VyIGhpc3RvcnkgY2Fubm90IHJlcGxhY2Ugc3RhdGUgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBIVE1MNSBoaXN0b3J5Jyk7XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoaHJlZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvID0gZnVuY3Rpb24gZ28obikge1xuICAgIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gIH07XG5cbiAgdmFyIGdvQmFjayA9IGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICByZXR1cm4gZ28oLTEpO1xuICB9O1xuXG4gIHZhciBnb0ZvcndhcmQgPSBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgcmV0dXJuIGdvKDEpO1xuICB9O1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMDtcblxuICB2YXIgY2hlY2tET01MaXN0ZW5lcnMgPSBmdW5jdGlvbiBjaGVja0RPTUxpc3RlbmVycyhkZWx0YSkge1xuICAgIGxpc3RlbmVyQ291bnQgKz0gZGVsdGE7XG5cbiAgICBpZiAobGlzdGVuZXJDb3VudCA9PT0gMSkge1xuICAgICAgKDAsIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKSh3aW5kb3csIFBvcFN0YXRlRXZlbnQsIGhhbmRsZVBvcFN0YXRlKTtcblxuICAgICAgaWYgKG5lZWRzSGFzaENoYW5nZUxpc3RlbmVyKSAoMCwgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIpKHdpbmRvdywgSGFzaENoYW5nZUV2ZW50LCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB9IGVsc2UgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgICgwLCBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcikod2luZG93LCBQb3BTdGF0ZUV2ZW50LCBoYW5kbGVQb3BTdGF0ZSk7XG5cbiAgICAgIGlmIChuZWVkc0hhc2hDaGFuZ2VMaXN0ZW5lcikgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICB2YXIgYmxvY2sgPSBmdW5jdGlvbiBibG9jaygpIHtcbiAgICB2YXIgcHJvbXB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVCcm93c2VySGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0xvY2F0aW9uVXRpbHMgPSByZXF1aXJlKCcuL0xvY2F0aW9uVXRpbHMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcicpO1xuXG52YXIgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEhhc2hDaGFuZ2VFdmVudCA9ICdoYXNoY2hhbmdlJztcblxudmFyIEhhc2hQYXRoQ29kZXJzID0ge1xuICBoYXNoYmFuZzoge1xuICAgIGVuY29kZVBhdGg6IGZ1bmN0aW9uIGVuY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoIDogJyEvJyArICgwLCBfUGF0aFV0aWxzLnN0cmlwTGVhZGluZ1NsYXNoKShwYXRoKTtcbiAgICB9LFxuICAgIGRlY29kZVBhdGg6IGZ1bmN0aW9uIGRlY29kZVBhdGgocGF0aCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnIScgPyBwYXRoLnN1YnN0cigxKSA6IHBhdGg7XG4gICAgfVxuICB9LFxuICBub3NsYXNoOiB7XG4gICAgZW5jb2RlUGF0aDogX1BhdGhVdGlscy5zdHJpcExlYWRpbmdTbGFzaCxcbiAgICBkZWNvZGVQYXRoOiBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaFxuICB9LFxuICBzbGFzaDoge1xuICAgIGVuY29kZVBhdGg6IF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoLFxuICAgIGRlY29kZVBhdGg6IF9QYXRoVXRpbHMuYWRkTGVhZGluZ1NsYXNoXG4gIH1cbn07XG5cbnZhciBnZXRIYXNoUGF0aCA9IGZ1bmN0aW9uIGdldEhhc2hQYXRoKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHZhciBocmVmID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIHZhciBoYXNoSW5kZXggPSBocmVmLmluZGV4T2YoJyMnKTtcbiAgcmV0dXJuIGhhc2hJbmRleCA9PT0gLTEgPyAnJyA6IGhyZWYuc3Vic3RyaW5nKGhhc2hJbmRleCArIDEpO1xufTtcblxudmFyIHB1c2hIYXNoUGF0aCA9IGZ1bmN0aW9uIHB1c2hIYXNoUGF0aChwYXRoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XG59O1xuXG52YXIgcmVwbGFjZUhhc2hQYXRoID0gZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgdmFyIGhhc2hJbmRleCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJyMnKTtcblxuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSgwLCBoYXNoSW5kZXggPj0gMCA/IGhhc2hJbmRleCA6IDApICsgJyMnICsgcGF0aCk7XG59O1xuXG52YXIgY3JlYXRlSGFzaEhpc3RvcnkgPSBmdW5jdGlvbiBjcmVhdGVIYXNoSGlzdG9yeSgpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoX0RPTVV0aWxzLmNhblVzZURPTSwgJ0hhc2ggaGlzdG9yeSBuZWVkcyBhIERPTScpO1xuXG4gIHZhciBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIHZhciBjYW5Hb1dpdGhvdXRSZWxvYWQgPSAoMCwgX0RPTVV0aWxzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKSgpO1xuXG4gIHZhciBfcHJvcHMkZ2V0VXNlckNvbmZpcm0gPSBwcm9wcy5nZXRVc2VyQ29uZmlybWF0aW9uLFxuICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IF9wcm9wcyRnZXRVc2VyQ29uZmlybSA9PT0gdW5kZWZpbmVkID8gX0RPTVV0aWxzLmdldENvbmZpcm1hdGlvbiA6IF9wcm9wcyRnZXRVc2VyQ29uZmlybSxcbiAgICAgIF9wcm9wcyRoYXNoVHlwZSA9IHByb3BzLmhhc2hUeXBlLFxuICAgICAgaGFzaFR5cGUgPSBfcHJvcHMkaGFzaFR5cGUgPT09IHVuZGVmaW5lZCA/ICdzbGFzaCcgOiBfcHJvcHMkaGFzaFR5cGU7XG5cbiAgdmFyIGJhc2VuYW1lID0gcHJvcHMuYmFzZW5hbWUgPyAoMCwgX1BhdGhVdGlscy5zdHJpcFRyYWlsaW5nU2xhc2gpKCgwLCBfUGF0aFV0aWxzLmFkZExlYWRpbmdTbGFzaCkocHJvcHMuYmFzZW5hbWUpKSA6ICcnO1xuXG4gIHZhciBfSGFzaFBhdGhDb2RlcnMkaGFzaFQgPSBIYXNoUGF0aENvZGVyc1toYXNoVHlwZV0sXG4gICAgICBlbmNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmVuY29kZVBhdGgsXG4gICAgICBkZWNvZGVQYXRoID0gX0hhc2hQYXRoQ29kZXJzJGhhc2hULmRlY29kZVBhdGg7XG5cblxuICB2YXIgZ2V0RE9NTG9jYXRpb24gPSBmdW5jdGlvbiBnZXRET01Mb2NhdGlvbigpIHtcbiAgICB2YXIgcGF0aCA9IGRlY29kZVBhdGgoZ2V0SGFzaFBhdGgoKSk7XG5cbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKCFiYXNlbmFtZSB8fCAoMCwgX1BhdGhVdGlscy5oYXNCYXNlbmFtZSkocGF0aCwgYmFzZW5hbWUpLCAnWW91IGFyZSBhdHRlbXB0aW5nIHRvIHVzZSBhIGJhc2VuYW1lIG9uIGEgcGFnZSB3aG9zZSBVUkwgcGF0aCBkb2VzIG5vdCBiZWdpbiAnICsgJ3dpdGggdGhlIGJhc2VuYW1lLiBFeHBlY3RlZCBwYXRoIFwiJyArIHBhdGggKyAnXCIgdG8gYmVnaW4gd2l0aCBcIicgKyBiYXNlbmFtZSArICdcIi4nKTtcblxuICAgIGlmIChiYXNlbmFtZSkgcGF0aCA9ICgwLCBfUGF0aFV0aWxzLnN0cmlwQmFzZW5hbWUpKHBhdGgsIGJhc2VuYW1lKTtcblxuICAgIHJldHVybiAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgpO1xuICB9O1xuXG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKCk7XG5cbiAgdmFyIHNldFN0YXRlID0gZnVuY3Rpb24gc2V0U3RhdGUobmV4dFN0YXRlKSB7XG4gICAgX2V4dGVuZHMoaGlzdG9yeSwgbmV4dFN0YXRlKTtcblxuICAgIGhpc3RvcnkubGVuZ3RoID0gZ2xvYmFsSGlzdG9yeS5sZW5ndGg7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5ub3RpZnlMaXN0ZW5lcnMoaGlzdG9yeS5sb2NhdGlvbiwgaGlzdG9yeS5hY3Rpb24pO1xuICB9O1xuXG4gIHZhciBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgdmFyIGlnbm9yZVBhdGggPSBudWxsO1xuXG4gIHZhciBoYW5kbGVIYXNoQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICB2YXIgcGF0aCA9IGdldEhhc2hQYXRoKCk7XG4gICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChwYXRoKTtcblxuICAgIGlmIChwYXRoICE9PSBlbmNvZGVkUGF0aCkge1xuICAgICAgLy8gRW5zdXJlIHdlIGFsd2F5cyBoYXZlIGEgcHJvcGVybHktZW5jb2RlZCBoYXNoLlxuICAgICAgcmVwbGFjZUhhc2hQYXRoKGVuY29kZWRQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxvY2F0aW9uID0gZ2V0RE9NTG9jYXRpb24oKTtcbiAgICAgIHZhciBwcmV2TG9jYXRpb24gPSBoaXN0b3J5LmxvY2F0aW9uO1xuXG4gICAgICBpZiAoIWZvcmNlTmV4dFBvcCAmJiAoMCwgX0xvY2F0aW9uVXRpbHMubG9jYXRpb25zQXJlRXF1YWwpKHByZXZMb2NhdGlvbiwgbG9jYXRpb24pKSByZXR1cm47IC8vIEEgaGFzaGNoYW5nZSBkb2Vzbid0IGFsd2F5cyA9PSBsb2NhdGlvbiBjaGFuZ2UuXG5cbiAgICAgIGlmIChpZ25vcmVQYXRoID09PSAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbikpIHJldHVybjsgLy8gSWdub3JlIHRoaXMgY2hhbmdlOyB3ZSBhbHJlYWR5IHNldFN0YXRlIGluIHB1c2gvcmVwbGFjZS5cblxuICAgICAgaWdub3JlUGF0aCA9IG51bGw7XG5cbiAgICAgIGhhbmRsZVBvcChsb2NhdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVQb3AgPSBmdW5jdGlvbiBoYW5kbGVQb3AobG9jYXRpb24pIHtcbiAgICBpZiAoZm9yY2VOZXh0UG9wKSB7XG4gICAgICBmb3JjZU5leHRQb3AgPSBmYWxzZTtcbiAgICAgIHNldFN0YXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhY3Rpb24gPSAnUE9QJztcblxuICAgICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgc2V0U3RhdGUoeyBhY3Rpb246IGFjdGlvbiwgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldmVydFBvcChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcmV2ZXJ0UG9wID0gZnVuY3Rpb24gcmV2ZXJ0UG9wKGZyb21Mb2NhdGlvbikge1xuICAgIHZhciB0b0xvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbjtcblxuICAgIC8vIFRPRE86IFdlIGNvdWxkIHByb2JhYmx5IG1ha2UgdGhpcyBtb3JlIHJlbGlhYmxlIGJ5XG4gICAgLy8ga2VlcGluZyBhIGxpc3Qgb2YgcGF0aHMgd2UndmUgc2VlbiBpbiBzZXNzaW9uU3RvcmFnZS5cbiAgICAvLyBJbnN0ZWFkLCB3ZSBqdXN0IGRlZmF1bHQgdG8gMCBmb3IgcGF0aHMgd2UgZG9uJ3Qga25vdy5cblxuICAgIHZhciB0b0luZGV4ID0gYWxsUGF0aHMubGFzdEluZGV4T2YoKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkodG9Mb2NhdGlvbikpO1xuXG4gICAgaWYgKHRvSW5kZXggPT09IC0xKSB0b0luZGV4ID0gMDtcblxuICAgIHZhciBmcm9tSW5kZXggPSBhbGxQYXRocy5sYXN0SW5kZXhPZigoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShmcm9tTG9jYXRpb24pKTtcblxuICAgIGlmIChmcm9tSW5kZXggPT09IC0xKSBmcm9tSW5kZXggPSAwO1xuXG4gICAgdmFyIGRlbHRhID0gdG9JbmRleCAtIGZyb21JbmRleDtcblxuICAgIGlmIChkZWx0YSkge1xuICAgICAgZm9yY2VOZXh0UG9wID0gdHJ1ZTtcbiAgICAgIGdvKGRlbHRhKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRW5zdXJlIHRoZSBoYXNoIGlzIGVuY29kZWQgcHJvcGVybHkgYmVmb3JlIGRvaW5nIGFueXRoaW5nIGVsc2UuXG4gIHZhciBwYXRoID0gZ2V0SGFzaFBhdGgoKTtcbiAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChwYXRoKTtcblxuICBpZiAocGF0aCAhPT0gZW5jb2RlZFBhdGgpIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG5cbiAgdmFyIGluaXRpYWxMb2NhdGlvbiA9IGdldERPTUxvY2F0aW9uKCk7XG4gIHZhciBhbGxQYXRocyA9IFsoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShpbml0aWFsTG9jYXRpb24pXTtcblxuICAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgdmFyIGNyZWF0ZUhyZWYgPSBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuICcjJyArIGVuY29kZVBhdGgoYmFzZW5hbWUgKyAoMCwgX1BhdGhVdGlscy5jcmVhdGVQYXRoKShsb2NhdGlvbikpO1xuICB9O1xuXG4gIHZhciBwdXNoID0gZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgcHVzaCBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBwYXRoID0gKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pO1xuICAgICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChiYXNlbmFtZSArIHBhdGgpO1xuICAgICAgdmFyIGhhc2hDaGFuZ2VkID0gZ2V0SGFzaFBhdGgoKSAhPT0gZW5jb2RlZFBhdGg7XG5cbiAgICAgIGlmIChoYXNoQ2hhbmdlZCkge1xuICAgICAgICAvLyBXZSBjYW5ub3QgdGVsbCBpZiBhIGhhc2hjaGFuZ2Ugd2FzIGNhdXNlZCBieSBhIFBVU0gsIHNvIHdlJ2RcbiAgICAgICAgLy8gcmF0aGVyIHNldFN0YXRlIGhlcmUgYW5kIGlnbm9yZSB0aGUgaGFzaGNoYW5nZS4gVGhlIGNhdmVhdCBoZXJlXG4gICAgICAgIC8vIGlzIHRoYXQgb3RoZXIgaGFzaCBoaXN0b3JpZXMgaW4gdGhlIHBhZ2Ugd2lsbCBjb25zaWRlciBpdCBhIFBPUC5cbiAgICAgICAgaWdub3JlUGF0aCA9IHBhdGg7XG4gICAgICAgIHB1c2hIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG5cbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbFBhdGhzLmxhc3RJbmRleE9mKCgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGhpc3RvcnkubG9jYXRpb24pKTtcbiAgICAgICAgdmFyIG5leHRQYXRocyA9IGFsbFBhdGhzLnNsaWNlKDAsIHByZXZJbmRleCA9PT0gLTEgPyAwIDogcHJldkluZGV4ICsgMSk7XG5cbiAgICAgICAgbmV4dFBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgIGFsbFBhdGhzID0gbmV4dFBhdGhzO1xuXG4gICAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdIYXNoIGhpc3RvcnkgY2Fubm90IFBVU0ggdGhlIHNhbWUgcGF0aDsgYSBuZXcgZW50cnkgd2lsbCBub3QgYmUgYWRkZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2snKTtcblxuICAgICAgICBzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoc3RhdGUgPT09IHVuZGVmaW5lZCwgJ0hhc2ggaGlzdG9yeSBjYW5ub3QgcmVwbGFjZSBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdSRVBMQUNFJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBoaXN0b3J5LmxvY2F0aW9uKTtcblxuICAgIHRyYW5zaXRpb25NYW5hZ2VyLmNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGFjdGlvbiwgZ2V0VXNlckNvbmZpcm1hdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAoIW9rKSByZXR1cm47XG5cbiAgICAgIHZhciBwYXRoID0gKDAsIF9QYXRoVXRpbHMuY3JlYXRlUGF0aCkobG9jYXRpb24pO1xuICAgICAgdmFyIGVuY29kZWRQYXRoID0gZW5jb2RlUGF0aChiYXNlbmFtZSArIHBhdGgpO1xuICAgICAgdmFyIGhhc2hDaGFuZ2VkID0gZ2V0SGFzaFBhdGgoKSAhPT0gZW5jb2RlZFBhdGg7XG5cbiAgICAgIGlmIChoYXNoQ2hhbmdlZCkge1xuICAgICAgICAvLyBXZSBjYW5ub3QgdGVsbCBpZiBhIGhhc2hjaGFuZ2Ugd2FzIGNhdXNlZCBieSBhIFJFUExBQ0UsIHNvIHdlJ2RcbiAgICAgICAgLy8gcmF0aGVyIHNldFN0YXRlIGhlcmUgYW5kIGlnbm9yZSB0aGUgaGFzaGNoYW5nZS4gVGhlIGNhdmVhdCBoZXJlXG4gICAgICAgIC8vIGlzIHRoYXQgb3RoZXIgaGFzaCBoaXN0b3JpZXMgaW4gdGhlIHBhZ2Ugd2lsbCBjb25zaWRlciBpdCBhIFBPUC5cbiAgICAgICAgaWdub3JlUGF0aCA9IHBhdGg7XG4gICAgICAgIHJlcGxhY2VIYXNoUGF0aChlbmNvZGVkUGF0aCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxQYXRocy5pbmRleE9mKCgwLCBfUGF0aFV0aWxzLmNyZWF0ZVBhdGgpKGhpc3RvcnkubG9jYXRpb24pKTtcblxuICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIGFsbFBhdGhzW3ByZXZJbmRleF0gPSBwYXRoO1xuXG4gICAgICBzZXRTdGF0ZSh7IGFjdGlvbjogYWN0aW9uLCBsb2NhdGlvbjogbG9jYXRpb24gfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGdvID0gZnVuY3Rpb24gZ28obikge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoY2FuR29XaXRob3V0UmVsb2FkLCAnSGFzaCBoaXN0b3J5IGdvKG4pIGNhdXNlcyBhIGZ1bGwgcGFnZSByZWxvYWQgaW4gdGhpcyBicm93c2VyJyk7XG5cbiAgICBnbG9iYWxIaXN0b3J5LmdvKG4pO1xuICB9O1xuXG4gIHZhciBnb0JhY2sgPSBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIGdvKC0xKTtcbiAgfTtcblxuICB2YXIgZ29Gb3J3YXJkID0gZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIHJldHVybiBnbygxKTtcbiAgfTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDA7XG5cbiAgdmFyIGNoZWNrRE9NTGlzdGVuZXJzID0gZnVuY3Rpb24gY2hlY2tET01MaXN0ZW5lcnMoZGVsdGEpIHtcbiAgICBsaXN0ZW5lckNvdW50ICs9IGRlbHRhO1xuXG4gICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEpIHtcbiAgICAgICgwLCBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcikod2luZG93LCBIYXNoQ2hhbmdlRXZlbnQsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIH0gZWxzZSBpZiAobGlzdGVuZXJDb3VudCA9PT0gMCkge1xuICAgICAgKDAsIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKSh3aW5kb3csIEhhc2hDaGFuZ2VFdmVudCwgaGFuZGxlSGFzaENoYW5nZSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICB2YXIgYmxvY2sgPSBmdW5jdGlvbiBibG9jaygpIHtcbiAgICB2YXIgcHJvbXB0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBmYWxzZTtcblxuICAgIHZhciB1bmJsb2NrID0gdHJhbnNpdGlvbk1hbmFnZXIuc2V0UHJvbXB0KHByb21wdCk7XG5cbiAgICBpZiAoIWlzQmxvY2tlZCkge1xuICAgICAgY2hlY2tET01MaXN0ZW5lcnMoMSk7XG4gICAgICBpc0Jsb2NrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoaXNCbG9ja2VkKSB7XG4gICAgICAgIGlzQmxvY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0RPTUxpc3RlbmVycygtMSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmJsb2NrKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgbGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgdmFyIHVubGlzdGVuID0gdHJhbnNpdGlvbk1hbmFnZXIuYXBwZW5kTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIGNoZWNrRE9NTGlzdGVuZXJzKDEpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrRE9NTGlzdGVuZXJzKC0xKTtcbiAgICAgIHVubGlzdGVuKCk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGdsb2JhbEhpc3RvcnkubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGluaXRpYWxMb2NhdGlvbixcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVIYXNoSGlzdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY2xhbXAgPSBmdW5jdGlvbiBjbGFtcChuLCBsb3dlckJvdW5kLCB1cHBlckJvdW5kKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBsb3dlckJvdW5kKSwgdXBwZXJCb3VuZCk7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHN0b3JlcyBsb2NhdGlvbnMgaW4gbWVtb3J5LlxuICovXG52YXIgY3JlYXRlTWVtb3J5SGlzdG9yeSA9IGZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3RvcnkoKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBnZXRVc2VyQ29uZmlybWF0aW9uID0gcHJvcHMuZ2V0VXNlckNvbmZpcm1hdGlvbixcbiAgICAgIF9wcm9wcyRpbml0aWFsRW50cmllcyA9IHByb3BzLmluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEVudHJpZXMgPSBfcHJvcHMkaW5pdGlhbEVudHJpZXMgPT09IHVuZGVmaW5lZCA/IFsnLyddIDogX3Byb3BzJGluaXRpYWxFbnRyaWVzLFxuICAgICAgX3Byb3BzJGluaXRpYWxJbmRleCA9IHByb3BzLmluaXRpYWxJbmRleCxcbiAgICAgIGluaXRpYWxJbmRleCA9IF9wcm9wcyRpbml0aWFsSW5kZXggPT09IHVuZGVmaW5lZCA/IDAgOiBfcHJvcHMkaW5pdGlhbEluZGV4LFxuICAgICAgX3Byb3BzJGtleUxlbmd0aCA9IHByb3BzLmtleUxlbmd0aCxcbiAgICAgIGtleUxlbmd0aCA9IF9wcm9wcyRrZXlMZW5ndGggPT09IHVuZGVmaW5lZCA/IDYgOiBfcHJvcHMka2V5TGVuZ3RoO1xuXG5cbiAgdmFyIHRyYW5zaXRpb25NYW5hZ2VyID0gKDAsIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIuZGVmYXVsdCkoKTtcblxuICB2YXIgc2V0U3RhdGUgPSBmdW5jdGlvbiBzZXRTdGF0ZShuZXh0U3RhdGUpIHtcbiAgICBfZXh0ZW5kcyhoaXN0b3J5LCBuZXh0U3RhdGUpO1xuXG4gICAgaGlzdG9yeS5sZW5ndGggPSBoaXN0b3J5LmVudHJpZXMubGVuZ3RoO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIubm90aWZ5TGlzdGVuZXJzKGhpc3RvcnkubG9jYXRpb24sIGhpc3RvcnkuYWN0aW9uKTtcbiAgfTtcblxuICB2YXIgY3JlYXRlS2V5ID0gZnVuY3Rpb24gY3JlYXRlS2V5KCkge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwga2V5TGVuZ3RoKTtcbiAgfTtcblxuICB2YXIgaW5kZXggPSBjbGFtcChpbml0aWFsSW5kZXgsIDAsIGluaXRpYWxFbnRyaWVzLmxlbmd0aCAtIDEpO1xuICB2YXIgZW50cmllcyA9IGluaXRpYWxFbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJyA/ICgwLCBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbikoZW50cnksIHVuZGVmaW5lZCwgY3JlYXRlS2V5KCkpIDogKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShlbnRyeSwgdW5kZWZpbmVkLCBlbnRyeS5rZXkgfHwgY3JlYXRlS2V5KCkpO1xuICB9KTtcblxuICAvLyBQdWJsaWMgaW50ZXJmYWNlXG5cbiAgdmFyIGNyZWF0ZUhyZWYgPSBfUGF0aFV0aWxzLmNyZWF0ZVBhdGg7XG5cbiAgdmFyIHB1c2ggPSBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XG4gICAgKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghKCh0eXBlb2YgcGF0aCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YocGF0aCkpID09PSAnb2JqZWN0JyAmJiBwYXRoLnN0YXRlICE9PSB1bmRlZmluZWQgJiYgc3RhdGUgIT09IHVuZGVmaW5lZCksICdZb3Ugc2hvdWxkIGF2b2lkIHByb3ZpZGluZyBhIDJuZCBzdGF0ZSBhcmd1bWVudCB0byBwdXNoIHdoZW4gdGhlIDFzdCAnICsgJ2FyZ3VtZW50IGlzIGEgbG9jYXRpb24tbGlrZSBvYmplY3QgdGhhdCBhbHJlYWR5IGhhcyBzdGF0ZTsgaXQgaXMgaWdub3JlZCcpO1xuXG4gICAgdmFyIGFjdGlvbiA9ICdQVVNIJztcbiAgICB2YXIgbG9jYXRpb24gPSAoMCwgX0xvY2F0aW9uVXRpbHMuY3JlYXRlTG9jYXRpb24pKHBhdGgsIHN0YXRlLCBjcmVhdGVLZXkoKSwgaGlzdG9yeS5sb2NhdGlvbik7XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKCFvaykgcmV0dXJuO1xuXG4gICAgICB2YXIgcHJldkluZGV4ID0gaGlzdG9yeS5pbmRleDtcbiAgICAgIHZhciBuZXh0SW5kZXggPSBwcmV2SW5kZXggKyAxO1xuXG4gICAgICB2YXIgbmV4dEVudHJpZXMgPSBoaXN0b3J5LmVudHJpZXMuc2xpY2UoMCk7XG4gICAgICBpZiAobmV4dEVudHJpZXMubGVuZ3RoID4gbmV4dEluZGV4KSB7XG4gICAgICAgIG5leHRFbnRyaWVzLnNwbGljZShuZXh0SW5kZXgsIG5leHRFbnRyaWVzLmxlbmd0aCAtIG5leHRJbmRleCwgbG9jYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dEVudHJpZXMucHVzaChsb2NhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaW5kZXg6IG5leHRJbmRleCxcbiAgICAgICAgZW50cmllczogbmV4dEVudHJpZXNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciByZXBsYWNlID0gZnVuY3Rpb24gcmVwbGFjZShwYXRoLCBzdGF0ZSkge1xuICAgICgwLCBfd2FybmluZzIuZGVmYXVsdCkoISgodHlwZW9mIHBhdGggPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHBhdGgpKSA9PT0gJ29iamVjdCcgJiYgcGF0aC5zdGF0ZSAhPT0gdW5kZWZpbmVkICYmIHN0YXRlICE9PSB1bmRlZmluZWQpLCAnWW91IHNob3VsZCBhdm9pZCBwcm92aWRpbmcgYSAybmQgc3RhdGUgYXJndW1lbnQgdG8gcmVwbGFjZSB3aGVuIHRoZSAxc3QgJyArICdhcmd1bWVudCBpcyBhIGxvY2F0aW9uLWxpa2Ugb2JqZWN0IHRoYXQgYWxyZWFkeSBoYXMgc3RhdGU7IGl0IGlzIGlnbm9yZWQnKTtcblxuICAgIHZhciBhY3Rpb24gPSAnUkVQTEFDRSc7XG4gICAgdmFyIGxvY2F0aW9uID0gKDAsIF9Mb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uKShwYXRoLCBzdGF0ZSwgY3JlYXRlS2V5KCksIGhpc3RvcnkubG9jYXRpb24pO1xuXG4gICAgdHJhbnNpdGlvbk1hbmFnZXIuY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmICghb2spIHJldHVybjtcblxuICAgICAgaGlzdG9yeS5lbnRyaWVzW2hpc3RvcnkuaW5kZXhdID0gbG9jYXRpb247XG5cbiAgICAgIHNldFN0YXRlKHsgYWN0aW9uOiBhY3Rpb24sIGxvY2F0aW9uOiBsb2NhdGlvbiB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ28gPSBmdW5jdGlvbiBnbyhuKSB7XG4gICAgdmFyIG5leHRJbmRleCA9IGNsYW1wKGhpc3RvcnkuaW5kZXggKyBuLCAwLCBoaXN0b3J5LmVudHJpZXMubGVuZ3RoIC0gMSk7XG5cbiAgICB2YXIgYWN0aW9uID0gJ1BPUCc7XG4gICAgdmFyIGxvY2F0aW9uID0gaGlzdG9yeS5lbnRyaWVzW25leHRJbmRleF07XG5cbiAgICB0cmFuc2l0aW9uTWFuYWdlci5jb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBhY3Rpb24sIGdldFVzZXJDb25maXJtYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgaW5kZXg6IG5leHRJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1pbWljIHRoZSBiZWhhdmlvciBvZiBET00gaGlzdG9yaWVzIGJ5XG4gICAgICAgIC8vIGNhdXNpbmcgYSByZW5kZXIgYWZ0ZXIgYSBjYW5jZWxsZWQgUE9QLlxuICAgICAgICBzZXRTdGF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHZhciBnb0JhY2sgPSBmdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgcmV0dXJuIGdvKC0xKTtcbiAgfTtcblxuICB2YXIgZ29Gb3J3YXJkID0gZnVuY3Rpb24gZ29Gb3J3YXJkKCkge1xuICAgIHJldHVybiBnbygxKTtcbiAgfTtcblxuICB2YXIgY2FuR28gPSBmdW5jdGlvbiBjYW5HbyhuKSB7XG4gICAgdmFyIG5leHRJbmRleCA9IGhpc3RvcnkuaW5kZXggKyBuO1xuICAgIHJldHVybiBuZXh0SW5kZXggPj0gMCAmJiBuZXh0SW5kZXggPCBoaXN0b3J5LmVudHJpZXMubGVuZ3RoO1xuICB9O1xuXG4gIHZhciBibG9jayA9IGZ1bmN0aW9uIGJsb2NrKCkge1xuICAgIHZhciBwcm9tcHQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IGZhbHNlO1xuICAgIHJldHVybiB0cmFuc2l0aW9uTWFuYWdlci5zZXRQcm9tcHQocHJvbXB0KTtcbiAgfTtcblxuICB2YXIgbGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgcmV0dXJuIHRyYW5zaXRpb25NYW5hZ2VyLmFwcGVuZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgfTtcblxuICB2YXIgaGlzdG9yeSA9IHtcbiAgICBsZW5ndGg6IGVudHJpZXMubGVuZ3RoLFxuICAgIGFjdGlvbjogJ1BPUCcsXG4gICAgbG9jYXRpb246IGVudHJpZXNbaW5kZXhdLFxuICAgIGluZGV4OiBpbmRleCxcbiAgICBlbnRyaWVzOiBlbnRyaWVzLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjYW5HbzogY2FuR28sXG4gICAgYmxvY2s6IGJsb2NrLFxuICAgIGxpc3RlbjogbGlzdGVuXG4gIH07XG5cbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVNZW1vcnlIaXN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKCkge1xuICB2YXIgcHJvbXB0ID0gbnVsbDtcblxuICB2YXIgc2V0UHJvbXB0ID0gZnVuY3Rpb24gc2V0UHJvbXB0KG5leHRQcm9tcHQpIHtcbiAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKHByb21wdCA9PSBudWxsLCAnQSBoaXN0b3J5IHN1cHBvcnRzIG9ubHkgb25lIHByb21wdCBhdCBhIHRpbWUnKTtcblxuICAgIHByb21wdCA9IG5leHRQcm9tcHQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb21wdCA9PT0gbmV4dFByb21wdCkgcHJvbXB0ID0gbnVsbDtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBjb25maXJtVHJhbnNpdGlvblRvID0gZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgYWN0aW9uLCBnZXRVc2VyQ29uZmlybWF0aW9uLCBjYWxsYmFjaykge1xuICAgIC8vIFRPRE86IElmIGFub3RoZXIgdHJhbnNpdGlvbiBzdGFydHMgd2hpbGUgd2UncmUgc3RpbGwgY29uZmlybWluZ1xuICAgIC8vIHRoZSBwcmV2aW91cyBvbmUsIHdlIG1heSBlbmQgdXAgaW4gYSB3ZWlyZCBzdGF0ZS4gRmlndXJlIG91dCB0aGVcbiAgICAvLyBiZXN0IHdheSB0byBoYW5kbGUgdGhpcy5cbiAgICBpZiAocHJvbXB0ICE9IG51bGwpIHtcbiAgICAgIHZhciByZXN1bHQgPSB0eXBlb2YgcHJvbXB0ID09PSAnZnVuY3Rpb24nID8gcHJvbXB0KGxvY2F0aW9uLCBhY3Rpb24pIDogcHJvbXB0O1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVc2VyQ29uZmlybWF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihyZXN1bHQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnQSBoaXN0b3J5IG5lZWRzIGEgZ2V0VXNlckNvbmZpcm1hdGlvbiBmdW5jdGlvbiBpbiBvcmRlciB0byB1c2UgYSBwcm9tcHQgbWVzc2FnZScpO1xuXG4gICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBmYWxzZSBmcm9tIGEgdHJhbnNpdGlvbiBob29rIHRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgY2FsbGJhY2socmVzdWx0ICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgbGlzdGVuZXJzID0gW107XG5cbiAgdmFyIGFwcGVuZExpc3RlbmVyID0gZnVuY3Rpb24gYXBwZW5kTGlzdGVuZXIoZm4pIHtcbiAgICB2YXIgaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICBpZiAoaXNBY3RpdmUpIGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzQWN0aXZlID0gZmFsc2U7XG4gICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIG5vdGlmeUxpc3RlbmVycyA9IGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBsaXN0ZW5lci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0UHJvbXB0OiBzZXRQcm9tcHQsXG4gICAgY29uZmlybVRyYW5zaXRpb25UbzogY29uZmlybVRyYW5zaXRpb25UbyxcbiAgICBhcHBlbmRMaXN0ZW5lcjogYXBwZW5kTGlzdGVuZXIsXG4gICAgbm90aWZ5TGlzdGVuZXJzOiBub3RpZnlMaXN0ZW5lcnNcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY3JlYXRlUGF0aCA9IGV4cG9ydHMucGFyc2VQYXRoID0gZXhwb3J0cy5sb2NhdGlvbnNBcmVFcXVhbCA9IGV4cG9ydHMuY3JlYXRlTG9jYXRpb24gPSBleHBvcnRzLmNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBleHBvcnRzLmNyZWF0ZUhhc2hIaXN0b3J5ID0gZXhwb3J0cy5jcmVhdGVCcm93c2VySGlzdG9yeSA9IHVuZGVmaW5lZDtcblxudmFyIF9Mb2NhdGlvblV0aWxzID0gcmVxdWlyZSgnLi9Mb2NhdGlvblV0aWxzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfTG9jYXRpb25VdGlscy5jcmVhdGVMb2NhdGlvbjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2xvY2F0aW9uc0FyZUVxdWFsJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0xvY2F0aW9uVXRpbHMubG9jYXRpb25zQXJlRXF1YWw7XG4gIH1cbn0pO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncGFyc2VQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1BhdGhVdGlscy5wYXJzZVBhdGg7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1BhdGhVdGlscy5jcmVhdGVQYXRoO1xuICB9XG59KTtcblxudmFyIF9jcmVhdGVCcm93c2VySGlzdG9yeTIgPSByZXF1aXJlKCcuL2NyZWF0ZUJyb3dzZXJIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlQnJvd3Nlckhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQnJvd3Nlckhpc3RvcnkyKTtcblxudmFyIF9jcmVhdGVIYXNoSGlzdG9yeTIgPSByZXF1aXJlKCcuL2NyZWF0ZUhhc2hIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlSGFzaEhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGFzaEhpc3RvcnkyKTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5MiA9IHJlcXVpcmUoJy4vY3JlYXRlTWVtb3J5SGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZU1lbW9yeUhpc3RvcnkzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTWVtb3J5SGlzdG9yeTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmNyZWF0ZUJyb3dzZXJIaXN0b3J5ID0gX2NyZWF0ZUJyb3dzZXJIaXN0b3J5My5kZWZhdWx0O1xuZXhwb3J0cy5jcmVhdGVIYXNoSGlzdG9yeSA9IF9jcmVhdGVIYXNoSGlzdG9yeTMuZGVmYXVsdDtcbmV4cG9ydHMuY3JlYXRlTWVtb3J5SGlzdG9yeSA9IF9jcmVhdGVNZW1vcnlIaXN0b3J5My5kZWZhdWx0OyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIF9fREVWX18gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChfX0RFVl9fKSB7XG4gIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbiBwcmludFdhcm5pbmcoZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHByaW50V2FybmluZy5hcHBseShudWxsLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfd2l0aFJvdXRlciA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXIvd2l0aFJvdXRlclwiKTtcblxudmFyIF93aXRoUm91dGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhSb3V0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfd2l0aFJvdXRlcjIuZGVmYXVsdDsgLy8gV3JpdHRlbiBpbiB0aGlzIHJvdW5kIGFib3V0IHdheSBmb3IgYmFiZWwtdHJhbnNmb3JtLWltcG9ydHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjgyKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjg2KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjg3KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMTU0KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoODcpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSgyODkpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSgyOTApOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSgxNTIpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSg4NCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKDg4KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjkxKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoMjI3KTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yICovIFwiZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclwiKSkoNCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKDMwNyk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKDE0OCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKDE0MCk7IiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIGdsb2JhbCwgZGVmaW5lLCBTeXN0ZW0sIFJlZmxlY3QsIFByb21pc2UgKi9cclxudmFyIF9fZXh0ZW5kcztcclxudmFyIF9fYXNzaWduO1xyXG52YXIgX19yZXN0O1xyXG52YXIgX19kZWNvcmF0ZTtcclxudmFyIF9fcGFyYW07XHJcbnZhciBfX21ldGFkYXRhO1xyXG52YXIgX19hd2FpdGVyO1xyXG52YXIgX19nZW5lcmF0b3I7XHJcbnZhciBfX2V4cG9ydFN0YXI7XHJcbnZhciBfX3ZhbHVlcztcclxudmFyIF9fcmVhZDtcclxudmFyIF9fc3ByZWFkO1xyXG52YXIgX19hd2FpdDtcclxudmFyIF9fYXN5bmNHZW5lcmF0b3I7XHJcbnZhciBfX2FzeW5jRGVsZWdhdG9yO1xyXG52YXIgX19hc3luY1ZhbHVlcztcclxudmFyIF9fbWFrZVRlbXBsYXRlT2JqZWN0O1xyXG52YXIgX19pbXBvcnRTdGFyO1xyXG52YXIgX19pbXBvcnREZWZhdWx0O1xyXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcclxuICAgIHZhciByb290ID0gdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHR5cGVvZiB0aGlzID09PSBcIm9iamVjdFwiID8gdGhpcyA6IHt9O1xyXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICAgICAgZGVmaW5lKFwidHNsaWJcIiwgW1wiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKGV4cG9ydHMpIHsgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihleHBvcnRzKSkpOyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgZmFjdG9yeShjcmVhdGVFeHBvcnRlcihyb290LCBjcmVhdGVFeHBvcnRlcihtb2R1bGUuZXhwb3J0cykpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZhY3RvcnkoY3JlYXRlRXhwb3J0ZXIocm9vdCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhwb3J0ZXIoZXhwb3J0cywgcHJldmlvdXMpIHtcclxuICAgICAgICBpZiAoZXhwb3J0cyAhPT0gcm9vdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGlkLCB2KSB7IHJldHVybiBleHBvcnRzW2lkXSA9IHByZXZpb3VzID8gcHJldmlvdXMoaWQsIHYpIDogdjsgfTtcclxuICAgIH1cclxufSlcclxuKGZ1bmN0aW9uIChleHBvcnRlcikge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcblxyXG4gICAgX19leHRlbmRzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcblxyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBfX3Jlc3QgPSBmdW5jdGlvbiAocywgZSkge1xyXG4gICAgICAgIHZhciB0ID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcblxyXG4gICAgX19kZWNvcmF0ZSA9IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgICAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcGFyYW0gPSBmdW5jdGlvbiAocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fbWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2F3YWl0ZXIgPSBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX19nZW5lcmF0b3IgPSBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICAgICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfX2V4cG9ydFN0YXIgPSBmdW5jdGlvbiAobSwgZXhwb3J0cykge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxuICAgIH07XHJcblxyXG4gICAgX192YWx1ZXMgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICAgICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIF9fcmVhZCA9IGZ1bmN0aW9uIChvLCBuKSB7XHJcbiAgICAgICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICAgICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcjtcclxuICAgIH07XHJcblxyXG4gICAgX19zcHJlYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgICAgICByZXR1cm4gYXI7XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXdhaXQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfX2FzeW5jR2VuZXJhdG9yID0gZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgICAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgIH1cclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19hc3luY0RlbGVnYXRvciA9IGZ1bmN0aW9uIChvKSB7XHJcbiAgICAgICAgdmFyIGksIHA7XHJcbiAgICAgICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgICAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbiAgICB9O1xyXG5cclxuICAgIF9fYXN5bmNWYWx1ZXMgPSBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgICAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICAgICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxuICAgIH07XHJcblxyXG4gICAgX19tYWtlVGVtcGxhdGVPYmplY3QgPSBmdW5jdGlvbiAoY29va2VkLCByYXcpIHtcclxuICAgICAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgICAgIHJldHVybiBjb29rZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIF9faW1wb3J0U3RhciA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgICAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgX19pbXBvcnREZWZhdWx0ID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnRlcihcIl9fZXh0ZW5kc1wiLCBfX2V4dGVuZHMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2Fzc2lnblwiLCBfX2Fzc2lnbik7XHJcbiAgICBleHBvcnRlcihcIl9fcmVzdFwiLCBfX3Jlc3QpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2RlY29yYXRlXCIsIF9fZGVjb3JhdGUpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3BhcmFtXCIsIF9fcGFyYW0pO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ldGFkYXRhXCIsIF9fbWV0YWRhdGEpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0ZXJcIiwgX19hd2FpdGVyKTtcclxuICAgIGV4cG9ydGVyKFwiX19nZW5lcmF0b3JcIiwgX19nZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2V4cG9ydFN0YXJcIiwgX19leHBvcnRTdGFyKTtcclxuICAgIGV4cG9ydGVyKFwiX192YWx1ZXNcIiwgX192YWx1ZXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX3JlYWRcIiwgX19yZWFkKTtcclxuICAgIGV4cG9ydGVyKFwiX19zcHJlYWRcIiwgX19zcHJlYWQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2F3YWl0XCIsIF9fYXdhaXQpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jR2VuZXJhdG9yXCIsIF9fYXN5bmNHZW5lcmF0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jRGVsZWdhdG9yXCIsIF9fYXN5bmNEZWxlZ2F0b3IpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2FzeW5jVmFsdWVzXCIsIF9fYXN5bmNWYWx1ZXMpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX21ha2VUZW1wbGF0ZU9iamVjdFwiLCBfX21ha2VUZW1wbGF0ZU9iamVjdCk7XHJcbiAgICBleHBvcnRlcihcIl9faW1wb3J0U3RhclwiLCBfX2ltcG9ydFN0YXIpO1xyXG4gICAgZXhwb3J0ZXIoXCJfX2ltcG9ydERlZmF1bHRcIiwgX19pbXBvcnREZWZhdWx0KTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSgxNDEpOyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IgKi8gXCJkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXCIpKSg1OCk7IiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciAqLyBcImRsbC1yZWZlcmVuY2UgLi92ZW5kb3JcIikpKDI3NSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==