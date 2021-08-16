(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["compartilhador"] = factory();
	else
		root["compartilhador"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/compartilhador/indexCompartilhador.ts":
/*!***************************************************!*\
  !*** ./src/compartilhador/indexCompartilhador.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeKitPublic": () => (/* binding */ makeKitPublic),
/* harmony export */   "getAllPublicKits": () => (/* binding */ getAllPublicKits)
/* harmony export */ });
/* harmony import */ var _config_api_firebase_kits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api_firebase/kits */ "./src/config/api_firebase/kits.ts");

async function makeKitPublic(element, kits) {
    const customKits = JSON.parse(kits);
    const arraySelecionado = customKits.filter((kit) => {
        return kit.id == element.id;
    });
    const kitSelecionado = JSON.parse(JSON.stringify(arraySelecionado[0]));
    const result = await (0,_config_api_firebase_kits__WEBPACK_IMPORTED_MODULE_0__.addKit)(kitSelecionado);
    return { result, kitSelecionado };
}
async function getAllPublicKits() {
    const response = await (0,_config_api_firebase_kits__WEBPACK_IMPORTED_MODULE_0__.getAll)();
    return Object.keys(response).map(key => response[key]);
}



/***/ }),

/***/ "./src/config/api_firebase/kits.ts":
/*!*****************************************!*\
  !*** ./src/config/api_firebase/kits.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "addKit": () => (/* binding */ addKit)
/* harmony export */ });
const API_URL = "https://compartilhador-strateegia-default-rtdb.firebaseio.com";
const COLLECTION_NAME = "kits";
async function getAll() {
    const response = await fetch(`${API_URL}/${COLLECTION_NAME}.json`, {
        method: "get",
        headers: {
            "Content-Type": "application/json"
        },
    });
    return await response.json();
}
async function addKit(kit) {
    const JSONkit = JSON.stringify(kit);
    const response = await fetch(`${API_URL}/${COLLECTION_NAME}.json`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: `${JSONkit}`,
    });
    return await response.json();
}



/***/ }),

/***/ "./src/config/api_strateegia/auth.ts":
/*!*******************************************!*\
  !*** ./src/config/api_strateegia/auth.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth)
/* harmony export */ });
const API_URL = 'https://api.strateegia.digital/users/v1/auth/signin';
async function auth(username, password) {
    const base64Login = btoa(`${username}:${password}`);
    const response = await fetch(API_URL, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${base64Login}`
        }
    });
    const data = await response.json();
    return data.access_token;
}



/***/ }),

/***/ "./src/config/api_strateegia/kits.ts":
/*!*******************************************!*\
  !*** ./src/config/api_strateegia/kits.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "getById": () => (/* binding */ getById),
/* harmony export */   "addKitToUser": () => (/* binding */ addKitToUser)
/* harmony export */ });
const API_URL = 'https://api.strateegia.digital/kits/v1/kit';
async function getAll(token) {
    const response = await fetch(`${API_URL}?size=5000`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}
async function getById(token, kit_id) {
    const response = await fetch(`${API_URL}/${kit_id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.json();
    return data;
}
async function addKitToUser(token, kit) {
    const JSONkit = JSON.stringify(kit);
    const response = await fetch(`${API_URL}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: `${JSONkit}`
    });
    return await response.json();
}



/***/ }),

/***/ "./src/strateegia/indexLogin.ts":
/*!**************************************!*\
  !*** ./src/strateegia/indexLogin.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* binding */ login)
/* harmony export */ });
/* harmony import */ var _config_api_strateegia_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api_strateegia/auth */ "./src/config/api_strateegia/auth.ts");

async function login(username, password) {
    return await (0,_config_api_strateegia_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(username, password);
}



/***/ }),

/***/ "./src/strateegia/indexStrateegia.ts":
/*!*******************************************!*\
  !*** ./src/strateegia/indexStrateegia.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMyKits": () => (/* binding */ getMyKits),
/* harmony export */   "importKitToStrateegia": () => (/* binding */ importKitToStrateegia)
/* harmony export */ });
/* harmony import */ var _config_api_strateegia_kits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api_strateegia/kits */ "./src/config/api_strateegia/kits.ts");

async function getMyKits(token) {
    const kits = await (0,_config_api_strateegia_kits__WEBPACK_IMPORTED_MODULE_0__.getAll)(token);
    const isCustom = (kit) => kit.tier === 'CUSTOM';
    const customKits = kits.content.filter(isCustom);
    return await customKits;
}
async function importKitToStrateegia(token, element, kits) {
    const kitToImport = kits.filter((kit) => {
        return kit.id == element.id;
    })[0];
    return await (0,_config_api_strateegia_kits__WEBPACK_IMPORTED_MODULE_0__.addKitToUser)(token, kitToImport);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "login": () => (/* reexport safe */ _strateegia_indexLogin__WEBPACK_IMPORTED_MODULE_0__.login),
/* harmony export */   "getMyKits": () => (/* reexport safe */ _strateegia_indexStrateegia__WEBPACK_IMPORTED_MODULE_1__.getMyKits),
/* harmony export */   "makeKitPublic": () => (/* reexport safe */ _compartilhador_indexCompartilhador__WEBPACK_IMPORTED_MODULE_2__.makeKitPublic),
/* harmony export */   "getAllPublicKits": () => (/* reexport safe */ _compartilhador_indexCompartilhador__WEBPACK_IMPORTED_MODULE_2__.getAllPublicKits),
/* harmony export */   "importKitToStrateegia": () => (/* reexport safe */ _strateegia_indexStrateegia__WEBPACK_IMPORTED_MODULE_1__.importKitToStrateegia)
/* harmony export */ });
/* harmony import */ var _strateegia_indexLogin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strateegia/indexLogin */ "./src/strateegia/indexLogin.ts");
/* harmony import */ var _strateegia_indexStrateegia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strateegia/indexStrateegia */ "./src/strateegia/indexStrateegia.ts");
/* harmony import */ var _compartilhador_indexCompartilhador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compartilhador/indexCompartilhador */ "./src/compartilhador/indexCompartilhador.ts");





})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wYXJ0aWxoYWRvci93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vY29tcGFydGlsaGFkb3IvLi9zcmMvY29tcGFydGlsaGFkb3IvaW5kZXhDb21wYXJ0aWxoYWRvci50cyIsIndlYnBhY2s6Ly9jb21wYXJ0aWxoYWRvci8uL3NyYy9jb25maWcvYXBpX2ZpcmViYXNlL2tpdHMudHMiLCJ3ZWJwYWNrOi8vY29tcGFydGlsaGFkb3IvLi9zcmMvY29uZmlnL2FwaV9zdHJhdGVlZ2lhL2F1dGgudHMiLCJ3ZWJwYWNrOi8vY29tcGFydGlsaGFkb3IvLi9zcmMvY29uZmlnL2FwaV9zdHJhdGVlZ2lhL2tpdHMudHMiLCJ3ZWJwYWNrOi8vY29tcGFydGlsaGFkb3IvLi9zcmMvc3RyYXRlZWdpYS9pbmRleExvZ2luLnRzIiwid2VicGFjazovL2NvbXBhcnRpbGhhZG9yLy4vc3JjL3N0cmF0ZWVnaWEvaW5kZXhTdHJhdGVlZ2lhLnRzIiwid2VicGFjazovL2NvbXBhcnRpbGhhZG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbXBhcnRpbGhhZG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb21wYXJ0aWxoYWRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbXBhcnRpbGhhZG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29tcGFydGlsaGFkb3IvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNkQ7QUFFN0QsS0FBSyxVQUFVLGFBQWEsQ0FBQyxPQUFvQixFQUFFLElBQVM7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aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiY29tcGFydGlsaGFkb3JcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiY29tcGFydGlsaGFkb3JcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJpbXBvcnQgeyBhZGRLaXQsIGdldEFsbCB9IGZyb20gXCIuLi9jb25maWcvYXBpX2ZpcmViYXNlL2tpdHNcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1ha2VLaXRQdWJsaWMoZWxlbWVudDogSFRNTEVsZW1lbnQsIGtpdHM6IGFueSl7ICAgICAgICBcclxuICAgIFxyXG4gICAgY29uc3QgY3VzdG9tS2l0cyA9IEpTT04ucGFyc2Uoa2l0cyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGFycmF5U2VsZWNpb25hZG8gPSBjdXN0b21LaXRzLmZpbHRlcigoa2l0OiBhbnkpID0+IHtcclxuICAgICAgICByZXR1cm4ga2l0LmlkID09IGVsZW1lbnQuaWQ7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3Qga2l0U2VsZWNpb25hZG8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFycmF5U2VsZWNpb25hZG9bMF0pKTtcclxuICAgIFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWRkS2l0KGtpdFNlbGVjaW9uYWRvKTsgICAgXHJcbiAgICBcclxuICAgIHJldHVybiB7cmVzdWx0LCBraXRTZWxlY2lvbmFkb307XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFB1YmxpY0tpdHMoKXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QWxsKCk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzcG9uc2UpLm1hcChrZXkgPT4gcmVzcG9uc2Vba2V5XSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge21ha2VLaXRQdWJsaWMsIGdldEFsbFB1YmxpY0tpdHN9IiwiY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly9jb21wYXJ0aWxoYWRvci1zdHJhdGVlZ2lhLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiO1xyXG5jb25zdCBDT0xMRUNUSU9OX05BTUUgPSBcImtpdHNcIjtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGwoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9LyR7Q09MTEVDVElPTl9OQU1FfS5qc29uYCwge1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkS2l0KGtpdDogYW55KSB7XHJcbiAgICBjb25zdCBKU09Oa2l0ID0gSlNPTi5zdHJpbmdpZnkoa2l0KTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9LyR7Q09MTEVDVElPTl9OQU1FfS5qc29uYCwge1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfSxcclxuICAgICAgYm9keTogYCR7SlNPTmtpdH1gLFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRBbGwsIGFkZEtpdCB9IiwiY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2FwaS5zdHJhdGVlZ2lhLmRpZ2l0YWwvdXNlcnMvdjEvYXV0aC9zaWduaW4nO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gYXV0aCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKXtcclxuICAgIGNvbnN0IGJhc2U2NExvZ2luID0gYnRvYShgJHt1c2VybmFtZX06JHtwYXNzd29yZH1gKTsgICAgXHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfVVJMLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCBcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHtiYXNlNjRMb2dpbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YS5hY2Nlc3NfdG9rZW47ICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgYXV0aCB9IiwiY29uc3QgQVBJX1VSTCA9ICdodHRwczovL2FwaS5zdHJhdGVlZ2lhLmRpZ2l0YWwva2l0cy92MS9raXQnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsKHRva2VuOiBzdHJpbmcpe1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0/c2l6ZT01MDAwYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCBcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7ICAgIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRCeUlkKHRva2VuOiBzdHJpbmcsIGtpdF9pZDogc3RyaW5nKXtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9LyR7a2l0X2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgXHJcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiBkYXRhOyAgICBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkS2l0VG9Vc2VyKHRva2VuOnN0cmluZywga2l0OiBhbnkpIHtcclxuICAgIGNvbnN0IEpTT05raXQgPSBKU09OLnN0cmluZ2lmeShraXQpO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsIFxyXG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBgJHtKU09Oa2l0fWBcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBnZXRBbGwsIGdldEJ5SWQsIGFkZEtpdFRvVXNlciB9IiwiaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9jb25maWcvYXBpX3N0cmF0ZWVnaWEvYXV0aFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyl7ICAgIFxyXG4gICAgcmV0dXJuIGF3YWl0IGF1dGgodXNlcm5hbWUsIHBhc3N3b3JkKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbG9naW4gfSIsImltcG9ydCB7IGdldEFsbCwgYWRkS2l0VG9Vc2VyIH0gZnJvbSBcIi4uL2NvbmZpZy9hcGlfc3RyYXRlZWdpYS9raXRzXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRNeUtpdHModG9rZW46IHN0cmluZyl7XHJcbiAgICBjb25zdCBraXRzID0gYXdhaXQgZ2V0QWxsKHRva2VuKTtcclxuICAgIFxyXG4gICAgY29uc3QgaXNDdXN0b20gPSAoa2l0OiBhbnkpID0+IGtpdC50aWVyID09PSAnQ1VTVE9NJztcclxuICAgIFxyXG4gICAgY29uc3QgY3VzdG9tS2l0cyA9IGtpdHMuY29udGVudC5maWx0ZXIoaXNDdXN0b20pO1xyXG4gICAgXHJcbiAgICByZXR1cm4gYXdhaXQgY3VzdG9tS2l0cztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW1wb3J0S2l0VG9TdHJhdGVlZ2lhKHRva2VuOiBzdHJpbmcsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBraXRzOiBhbnkpIHtcclxuICAgIGNvbnN0IGtpdFRvSW1wb3J0ID0ga2l0cy5maWx0ZXIoKGtpdDogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGtpdC5pZCA9PSBlbGVtZW50LmlkO1xyXG4gICAgfSlbMF07XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGFkZEtpdFRvVXNlcih0b2tlbiwga2l0VG9JbXBvcnQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXRNeUtpdHMsIGltcG9ydEtpdFRvU3RyYXRlZWdpYSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9naW4gfSBmcm9tIFwiLi9zdHJhdGVlZ2lhL2luZGV4TG9naW5cIjtcclxuaW1wb3J0IHsgZ2V0TXlLaXRzLCBpbXBvcnRLaXRUb1N0cmF0ZWVnaWEgfSBmcm9tIFwiLi9zdHJhdGVlZ2lhL2luZGV4U3RyYXRlZWdpYVwiO1xyXG5pbXBvcnQgeyBtYWtlS2l0UHVibGljLCBnZXRBbGxQdWJsaWNLaXRzIH0gZnJvbSBcIi4vY29tcGFydGlsaGFkb3IvaW5kZXhDb21wYXJ0aWxoYWRvclwiO1xyXG5cclxuZXhwb3J0IHsgbG9naW4sIGdldE15S2l0cywgbWFrZUtpdFB1YmxpYywgZ2V0QWxsUHVibGljS2l0cywgaW1wb3J0S2l0VG9TdHJhdGVlZ2lhIH0iXSwic291cmNlUm9vdCI6IiJ9