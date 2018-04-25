"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalObject = global;
exports.registerWebSocket = () => {
    globalObject.WebSocket = globalObject.WebSocket || require("ws");
};
exports.registerWindowProperties = () => {
    globalObject.window.setTimeout = globalObject.setTimeout || setTimeout;
    globalObject.window.clearTimeout = globalObject.setTimeout || clearTimeout;
    globalObject.window.WebSocket = globalObject.WebSocket;
    globalObject.window.ArrayBuffer = globalObject.ArrayBuffer;
    globalObject.window.addEventListener = globalObject.addEventListener || function () { };
    globalObject.window.navigator = globalObject.navigator || { onLine: true };
    globalObject.window.isNodeJS = globalObject.isNodeJS || true;
    globalObject.window.localStorage = globalObject.localStorage;
};
exports.registerWindow = () => {
    globalObject.window = globalObject.window || {};
    exports.registerWindowProperties();
};
class InMemoryLocalStorage {
    constructor() {
        this.store = {};
    }
    getItem(key) {
        return this.store[key];
    }
    ;
    setItem(key, value) {
        this.store[key] = value;
    }
    ;
    removeItem(key) {
        delete this.store[key];
    }
}
exports.InMemoryLocalStorage = InMemoryLocalStorage;
exports.registerLocalStorage = () => {
    console.log('register', globalObject.localStorage && globalObject.localStorage.getItem);
    globalObject.localStorage = globalObject.localStorage || new InMemoryLocalStorage();
};
/**
 * The function to polyfill with adding global.window.
 * So you can use window.{...} later.
 * REMEMBER: the import needs to be declared before imports that use window object.
 * INFO: It's save polyfill. It's mean if there is global.window it will not be changed.
 * INFO: Local storage polyfill will use inMemory RAM storage.
 * @param doPolyfillWebSockets and import ws object. By default true.
 */
exports.register = (doPolyfillWebSockets = true) => {
    if (doPolyfillWebSockets) {
        exports.registerWebSocket();
    }
    exports.registerLocalStorage();
    exports.registerWindow();
};
exports.default = { register: exports.register };
//# sourceMappingURL=index.js.map