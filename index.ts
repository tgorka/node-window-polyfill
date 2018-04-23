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
    globalObject.window.localStorage = globalObject.localStorage;
};

export const registerWindow = (): void => {
    globalObject.window = globalObject.window || {};
    registerWindowProperties();
};

export class InMemoryLocalStorage {
    private store: { [key:string]:any } = {};

    public getItem(key: string): any {
        return this.store[key];
    };

    public setItem(key: string, value: any): void {
        this.store[key] = value;
    };

    public removeItem(key: string): void {
        delete this.store[key]
    }
}

export const registerLocalStorage = (): void => {
    console.log('register', globalObject.localStorage && globalObject.localStorage.getItem)
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
export const register = (doPolyfillWebSockets: boolean = true): void => {
    if (doPolyfillWebSockets) {
        registerWebSocket();
    }
    registerLocalStorage();
    registerWindow();
};

export default { register: register };