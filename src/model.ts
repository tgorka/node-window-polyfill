export interface LocalStorage {
    getItem(key: string): any,
    setItem(key: string, value: any): void,
    removeItem(key: string): void,
}

export interface Window {
    localStorage: LocalStorage,
    setTimeout: Function,
    clearTimeout: Function,
    addEventListener: Function,
    navigator: {
        onLine: boolean,
    },
    isNodeJS: boolean,
    ArrayBuffer: any,
    WebSocket: any,
    Date: any,
}

export interface WindowGlobal extends Window {
    window: Window,
}
