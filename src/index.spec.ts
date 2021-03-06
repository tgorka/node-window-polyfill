import * as _debug from "debug";
import nodeWindowPolyfill from ".";
import { InMemoryLocalStorage } from ".";

const debug = _debug("nodeWindowPolyfill-test");

describe("default polyfill Test", () => {
    let item = null;
    let removedItem = true;

    beforeAll(async () => {
        (<any>global).window = undefined; // make sure it's not defined
        (<any>global).WebSocket = undefined;
        nodeWindowPolyfill.register();
        // @ts-ignore
        window.localStorage.setItem("TEST-1", "23");
        // @ts-ignore
        item = window.localStorage.getItem("TEST-1");
        // @ts-ignore
        window.localStorage.removeItem("TEST-1");
        // @ts-ignore
        removedItem = window.localStorage.getItem("TEST-1");
        debug(`after default polyfill is called.`);
    });

    afterAll(async () => {
        (<any>global).window = undefined;
    });

    // @ts-ignore
    it("window should not throw an error", () => expect(() => {window.isNodeJS}).not.toThrowError());
    // @ts-ignore
    it("window should be defined", () => expect(window).toBeDefined());
    // @ts-ignore
    it("window.isNodeJS is true", () => expect(window.isNodeJS).toBe(true));
    // @ts-ignore
    it("window.WebSocket should be instance of an object", () => expect(window.WebSocket).toBeDefined());
    // @ts-ignore
    it("window.localStorage should be defined", () => expect(window.localStorage).toBeDefined());
    // Not anymore there is an localStorage implemented in node
    // @ts-ignore
    //it("window.localStorage should be instance of InMemoryStorage", () => expect(window.localStorage).toBeInstanceOf(InMemoryLocalStorage));
    // @ts-ignore
    it("window.localStorage.getItem should be a function", () => expect(window.localStorage.getItem).toBeDefined());
    // @ts-ignore
    it("window.localStorage.setItem should be a function", () => expect(window.localStorage.setItem).toBeDefined());
    // @ts-ignore
    it("window.localStorage.removeItem should be a function", () => expect(window.localStorage.removeItem).toBeDefined());
    it("window.localStorage.setItem and getItem works", () => expect(item).toBe("23"));
    it("window.localStorage.setItem, removeItem and getItem works", () => expect(removedItem).toBeNull());
    // @ts-ignore
    it("window.Date should be instance of an object", () => expect(window.Date).toBeDefined());
    // @ts-ignore
    it("window.Date.now should be a function", () => expect(window.Date.now).toBeDefined());
});

describe("non 'ws' polyfill Test", () => {

    beforeAll(async () => {
        (<any>global).window = undefined; // make sure it's not defined
        (<any>global).WebSocket = undefined;
        nodeWindowPolyfill.register(false);
        debug(`after non 'ws' polyfill is called.`);
    });

    afterAll(async () => {
        (<any>global).window = undefined;
    });

    // @ts-ignore
    it("window should not throw an error", () => expect(() => {window.isNodeJS}).not.toThrowError());
    // @ts-ignore
    it("window should be defined", () => expect(window).toBeDefined());
    // @ts-ignore
    it("window.isNodeJS is true", () => expect(window.isNodeJS).toBe(true));
    // @ts-ignore
    it("window.WebSocket should be undefined", () => expect(window.WebSocket).not.toBeDefined());
});
