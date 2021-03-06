import { LocalStorage } from "./model";
export declare const registerWebSocket: () => void;
export declare const registerWindowProperties: () => void;
export declare const registerWindow: () => void;
export declare class InMemoryLocalStorage implements LocalStorage {
    private store;
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export declare const registerLocalStorage: () => void;
/**
 * The function to polyfill with adding global.window.
 * So you can use window.{...} later.
 * REMEMBER: the import needs to be declared before imports that use window object.
 * INFO: It's save polyfill. It's mean if there is global.window it will not be changed.
 * INFO: Local storage polyfill will use inMemory RAM storage.
 * @param doPolyfillWebSockets and import ws object. By default true.
 */
export declare const register: (doPolyfillWebSockets?: boolean) => void;
declare const _default: {
    register: (doPolyfillWebSockets?: boolean) => void;
};
export default _default;
