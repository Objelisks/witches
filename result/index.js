/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_js__ = __webpack_require__(3);\n\r\n\r\n\r\n\r\nconst scene = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"Scene\"]();\r\nconst camera = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"PerspectiveCamera\"](75, __WEBPACK_IMPORTED_MODULE_2__constants_js__[\"a\" /* c */].width / __WEBPACK_IMPORTED_MODULE_2__constants_js__[\"a\" /* c */].height, 0.1, 1000);\r\n\r\nconst world = new __WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js__[\"World\"]();\r\nworld.gravity.set(0, 0, -9.82);\r\nworld.broadphase = new __WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js__[\"NaiveBroadphase\"]();\r\nworld.defaultContactMaterial.friction = 1.0;\r\nworld.defaultContactMaterial.restitution = 0.001;\r\n\r\nconst renderer = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"WebGLRenderer\"]();\r\nrenderer.setSize(__WEBPACK_IMPORTED_MODULE_2__constants_js__[\"a\" /* c */].width, __WEBPACK_IMPORTED_MODULE_2__constants_js__[\"a\" /* c */].height);\r\ndocument.body.appendChild(renderer.domElement);\r\n\r\nrenderer.shadowMap.enabled = true;\r\n\r\nconst geo = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"BoxGeometry\"](1, 1, 1);\r\nconst mat = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"MeshStandardMaterial\"]({ color: 0xaadbcc, metalness: 0.2, roughness: 0.8 });\r\nconst cube = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"Mesh\"](geo, mat);\r\ncube.castShadow = true;\r\nscene.add(cube);\r\n\r\ncamera.position.x = 5;\r\ncamera.position.y = 5;\r\ncamera.position.z = 5;\r\ncamera.lookAt(cube.position);\r\n\r\nconst shape = new __WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js__[\"Sphere\"](0.5);\r\nconst body = new __WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js__[\"Body\"]({ mass: 5, shape: shape });\r\nbody.position.set(0, 0, 5);\r\nworld.add(body);\r\n\r\nconst ambient = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"AmbientLight\"](0x9999cc);\r\nscene.add(ambient);\r\nconst directional = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"DirectionalLight\"](0xabcabc, 1.0);\r\ndirectional.position.set(10, 10, 0);\r\ndirectional.castShadow = true;\r\ndirectional.shadow.camera.near = 1;\r\ndirectional.shadow.camera.far = 20;\r\ndirectional.shadow.camera.right = 5;\r\ndirectional.shadow.camera.left = -5;\r\ndirectional.shadow.camera.top\t= 5;\r\ndirectional.shadow.camera.bottom = -5;\r\ndirectional.shadow.mapWidth = 2048;\r\ndirectional.shadow.mapHeight = 2048;\r\nscene.add(directional);\r\n\r\nconst groundGeo = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"PlaneGeometry\"](10, 10);\r\ngroundGeo.rotateX(-90 * Math.PI / 180);\r\nconst groundMat = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"MeshStandardMaterial\"]({ color: 0xcd9a9a, metalness: 0.0, roughness: 0.8 });\r\nconst ground = new __WEBPACK_IMPORTED_MODULE_0__lib_three_three_js__[\"Mesh\"](groundGeo, groundMat);\r\nground.receiveShadow = true;\r\nscene.add(ground);\r\n\r\nconst groundShape = new __WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js__[\"Plane\"]();\r\nconst groundBody = new __WEBPACK_IMPORTED_MODULE_1__lib_cannon_cannon_js__[\"Body\"]({ mass: 0, shape: groundShape });\r\nworld.add(groundBody);\r\n\r\nconst animate = () => {\r\n  requestAnimationFrame(animate);\r\n  world.step(__WEBPACK_IMPORTED_MODULE_2__constants_js__[\"a\" /* c */].timeStep);\r\n  cube.position.set(body.position.x, body.position.z, body.position.y);\r\n  cube.quaternion.set(body.quaternion.x, body.quaternion.z,\r\n      body.quaternion.y, -body.quaternion.w);\r\n  renderer.render(scene, camera);\r\n};\r\nanimate();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvZGUvbWFpbi5qcz8wODZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjZW5lLCBQZXJzcGVjdGl2ZUNhbWVyYSwgV2ViR0xSZW5kZXJlciwgQm94R2VvbWV0cnksXHJcbiAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIE1lc2gsIEFtYmllbnRMaWdodCwgRGlyZWN0aW9uYWxMaWdodCxcclxuICBQbGFuZUdlb21ldHJ5LCBQQ0ZTb2Z0U2hhZG93TWFwIH0gZnJvbSAnLi9saWIvdGhyZWUvdGhyZWUuanMnO1xyXG5pbXBvcnQgeyBXb3JsZCwgTmFpdmVCcm9hZHBoYXNlLCBTcGhlcmUsIFZlYzMsIEJvZHksIFBsYW5lIH0gZnJvbSAnLi9saWIvY2Fubm9uL2Nhbm5vbi5qcyc7XHJcbmltcG9ydCB7IGMgfSBmcm9tICcuL2NvbnN0YW50cy5qcyc7XHJcblxyXG5jb25zdCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG5jb25zdCBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoNzUsIGMud2lkdGggLyBjLmhlaWdodCwgMC4xLCAxMDAwKTtcclxuXHJcbmNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKCk7XHJcbndvcmxkLmdyYXZpdHkuc2V0KDAsIDAsIC05LjgyKTtcclxud29ybGQuYnJvYWRwaGFzZSA9IG5ldyBOYWl2ZUJyb2FkcGhhc2UoKTtcclxud29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5mcmljdGlvbiA9IDEuMDtcclxud29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5yZXN0aXR1dGlvbiA9IDAuMDAxO1xyXG5cclxuY29uc3QgcmVuZGVyZXIgPSBuZXcgV2ViR0xSZW5kZXJlcigpO1xyXG5yZW5kZXJlci5zZXRTaXplKGMud2lkdGgsIGMuaGVpZ2h0KTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbmNvbnN0IGdlbyA9IG5ldyBCb3hHZW9tZXRyeSgxLCAxLCAxKTtcclxuY29uc3QgbWF0ID0gbmV3IE1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4YWFkYmNjLCBtZXRhbG5lc3M6IDAuMiwgcm91Z2huZXNzOiAwLjggfSk7XHJcbmNvbnN0IGN1YmUgPSBuZXcgTWVzaChnZW8sIG1hdCk7XHJcbmN1YmUuY2FzdFNoYWRvdyA9IHRydWU7XHJcbnNjZW5lLmFkZChjdWJlKTtcclxuXHJcbmNhbWVyYS5wb3NpdGlvbi54ID0gNTtcclxuY2FtZXJhLnBvc2l0aW9uLnkgPSA1O1xyXG5jYW1lcmEucG9zaXRpb24ueiA9IDU7XHJcbmNhbWVyYS5sb29rQXQoY3ViZS5wb3NpdGlvbik7XHJcblxyXG5jb25zdCBzaGFwZSA9IG5ldyBTcGhlcmUoMC41KTtcclxuY29uc3QgYm9keSA9IG5ldyBCb2R5KHsgbWFzczogNSwgc2hhcGU6IHNoYXBlIH0pO1xyXG5ib2R5LnBvc2l0aW9uLnNldCgwLCAwLCA1KTtcclxud29ybGQuYWRkKGJvZHkpO1xyXG5cclxuY29uc3QgYW1iaWVudCA9IG5ldyBBbWJpZW50TGlnaHQoMHg5OTk5Y2MpO1xyXG5zY2VuZS5hZGQoYW1iaWVudCk7XHJcbmNvbnN0IGRpcmVjdGlvbmFsID0gbmV3IERpcmVjdGlvbmFsTGlnaHQoMHhhYmNhYmMsIDEuMCk7XHJcbmRpcmVjdGlvbmFsLnBvc2l0aW9uLnNldCgxMCwgMTAsIDApO1xyXG5kaXJlY3Rpb25hbC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuZGlyZWN0aW9uYWwuc2hhZG93LmNhbWVyYS5uZWFyID0gMTtcclxuZGlyZWN0aW9uYWwuc2hhZG93LmNhbWVyYS5mYXIgPSAyMDtcclxuZGlyZWN0aW9uYWwuc2hhZG93LmNhbWVyYS5yaWdodCA9IDU7XHJcbmRpcmVjdGlvbmFsLnNoYWRvdy5jYW1lcmEubGVmdCA9IC01O1xyXG5kaXJlY3Rpb25hbC5zaGFkb3cuY2FtZXJhLnRvcFx0PSA1O1xyXG5kaXJlY3Rpb25hbC5zaGFkb3cuY2FtZXJhLmJvdHRvbSA9IC01O1xyXG5kaXJlY3Rpb25hbC5zaGFkb3cubWFwV2lkdGggPSAyMDQ4O1xyXG5kaXJlY3Rpb25hbC5zaGFkb3cubWFwSGVpZ2h0ID0gMjA0ODtcclxuc2NlbmUuYWRkKGRpcmVjdGlvbmFsKTtcclxuXHJcbmNvbnN0IGdyb3VuZEdlbyA9IG5ldyBQbGFuZUdlb21ldHJ5KDEwLCAxMCk7XHJcbmdyb3VuZEdlby5yb3RhdGVYKC05MCAqIE1hdGguUEkgLyAxODApO1xyXG5jb25zdCBncm91bmRNYXQgPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhjZDlhOWEsIG1ldGFsbmVzczogMC4wLCByb3VnaG5lc3M6IDAuOCB9KTtcclxuY29uc3QgZ3JvdW5kID0gbmV3IE1lc2goZ3JvdW5kR2VvLCBncm91bmRNYXQpO1xyXG5ncm91bmQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbnNjZW5lLmFkZChncm91bmQpO1xyXG5cclxuY29uc3QgZ3JvdW5kU2hhcGUgPSBuZXcgUGxhbmUoKTtcclxuY29uc3QgZ3JvdW5kQm9keSA9IG5ldyBCb2R5KHsgbWFzczogMCwgc2hhcGU6IGdyb3VuZFNoYXBlIH0pO1xyXG53b3JsZC5hZGQoZ3JvdW5kQm9keSk7XHJcblxyXG5jb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICB3b3JsZC5zdGVwKGMudGltZVN0ZXApO1xyXG4gIGN1YmUucG9zaXRpb24uc2V0KGJvZHkucG9zaXRpb24ueCwgYm9keS5wb3NpdGlvbi56LCBib2R5LnBvc2l0aW9uLnkpO1xyXG4gIGN1YmUucXVhdGVybmlvbi5zZXQoYm9keS5xdWF0ZXJuaW9uLngsIGJvZHkucXVhdGVybmlvbi56LFxyXG4gICAgICBib2R5LnF1YXRlcm5pb24ueSwgLWJvZHkucXVhdGVybmlvbi53KTtcclxuICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbn07XHJcbmFuaW1hdGUoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb2RlL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const c = {\r\n  width: 1028,\r\n  height: 768,\r\n  timeStep: 1.0 / 60.0,\r\n};\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = c;\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvZGUvY29uc3RhbnRzLmpzPzY1ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGMgPSB7XHJcbiAgd2lkdGg6IDEwMjgsXHJcbiAgaGVpZ2h0OiA3NjgsXHJcbiAgdGltZVN0ZXA6IDEuMCAvIDYwLjAsXHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29kZS9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);