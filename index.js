"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.registerLocalStorage = exports.InMemoryLocalStorage = exports.registerWindow = exports.registerWindowProperties = exports.registerWebSocket = void 0;
var globalObject = global;
var registerWebSocket = function () {
    globalObject.WebSocket = globalObject.WebSocket || require("ws");
};
exports.registerWebSocket = registerWebSocket;
var registerWindowProperties = function () {
    globalObject.window.setTimeout = globalObject.setTimeout || setTimeout;
    globalObject.window.clearTimeout = globalObject.clearTimeout || clearTimeout;
    globalObject.window.WebSocket = globalObject.WebSocket;
    globalObject.window.ArrayBuffer = globalObject.ArrayBuffer;
    globalObject.window.addEventListener = globalObject.addEventListener || function () { };
    globalObject.window.navigator = globalObject.navigator || { onLine: true };
    globalObject.window.isNodeJS = globalObject.isNodeJS || true;
    globalObject.window.localStorage = globalObject.localStorage;
    globalObject.window.Date = globalObject.Date;
};
exports.registerWindowProperties = registerWindowProperties;
var registerWindow = function () {
    globalObject.window = globalObject.window || {};
    exports.registerWindowProperties();
};
exports.registerWindow = registerWindow;
var InMemoryLocalStorage = /** @class */ (function () {
    function InMemoryLocalStorage() {
        this.store = {};
    }
    InMemoryLocalStorage.prototype.getItem = function (key) {
        return this.store[key] || null;
    };
    ;
    InMemoryLocalStorage.prototype.setItem = function (key, value) {
        this.store[key] = value;
    };
    ;
    InMemoryLocalStorage.prototype.removeItem = function (key) {
        delete this.store[key];
    };
    return InMemoryLocalStorage;
}());
exports.InMemoryLocalStorage = InMemoryLocalStorage;
var registerLocalStorage = function () {
    globalObject.localStorage = globalObject.localStorage || new InMemoryLocalStorage();
};
exports.registerLocalStorage = registerLocalStorage;
/**
 * The function to polyfill with adding global.window.
 * So you can use window.{...} later.
 * REMEMBER: the import needs to be declared before imports that use window object.
 * INFO: It's save polyfill. It's mean if there is global.window it will not be changed.
 * INFO: Local storage polyfill will use inMemory RAM storage.
 * @param doPolyfillWebSockets and import ws object. By default true.
 */
var register = function (doPolyfillWebSockets) {
    if (doPolyfillWebSockets === void 0) { doPolyfillWebSockets = true; }
    if (doPolyfillWebSockets) {
        exports.registerWebSocket();
    }
    exports.registerLocalStorage();
    exports.registerWindow();
};
exports.register = register;
exports.default = { register: exports.register };
//# sourceMappingURL=index.js.map