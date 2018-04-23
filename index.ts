const globalObject = <any>global;

export const registerWebSocket = (): void => {
    globalObject.WebSocket = globalObject.WebSocket || require("ws");
};

export const registerWindowProperties = (): void => {
    globalObject.window.setTimeout = globalObject.setTimeout || setTimeout;
    globalObject.window.clearTimeout = globalObject.setTimeout || clearTimeout;
    globalObject.window.WebSocket = globalObject.WebSocket;
    globalObject.window.ArrayBuffer = globalObject.ArrayBuffer;
    globalObject.window.addEventListener = globalObject.addEventListener || function () { };
    globalObject.window.navigator = globalObject.navigator || { onLine: true };
    globalObject.window.isNodeJS = globalObject.isNodeJS || true;
};

export const registerWindow = (): void => {
    globalObject.window = globalObject.window || {};
    registerWindowProperties();
};

export const registerLocalStorage = (): void => {
    globalObject.localStorage = globalObject.localStorage || {
        store: {},
        getItem: function (key) {
            return this.store[key]
        },
        setItem: function (key, value) {
            this.store[key] = value
        },
        removeItem: function (key) {
            delete this.store[key]
        }
    };
};

/**
 * The function to polyfill with adding global.window.
 * So you can use window.{...} later.
 * REMEMBER: the import needs to be declared before imports that use window object.
 * INFO: It's save polyfill. It's mean if there is global.window it will not be changed.
 * INFO: Local storage polyfill will use inMemory RAM storage.
 * @param doPolyfillWebSockets and import ws object. By default true.
 */
export const register = (doPolyfillWebSockets: boolean = true): void => {
    if (doPolyfillWebSockets) {
        registerWebSocket();
    }
    registerWindow();
    registerLocalStorage();
};

export default { register: register };