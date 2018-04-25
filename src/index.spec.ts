import * as _debug from "debug";
import nodeWindowPolyfill from ".";
import { InMemoryLocalStorage } from ".";


const debug = _debug("nodeWindowPolyfill-test");

describe("default polyfill Test", () => {
    let item = null;
    let removedItem = null;

    beforeAll(async () => {
        (<any>global).window = undefined; // make sure it's not defined
        (<any>global).WebSocket = undefined;
        nodeWindowPolyfill.register();
        window.localStorage.setItem("TEST-1", 23);
        item = window.localStorage.getItem("TEST-1");
        window.localStorage.removeItem("TEST-1");
        removedItem = window.localStorage.getItem("TEST-1");
        debug(`after default polyfill is called.`);
    });

    afterAll(async () => {
        (<any>global).window = undefined;
    });

    it("window should not throw an error", () => expect(() => {window.isNodeJS}).not.toThrowError());
    it("window should be defined", () => expect(window).toBeDefined());
    it("window.isNodeJS is true", () => expect(window.isNodeJS).toBe(true));
    it("window.WebSocket should be instance of an object", () => expect(window.WebSocket).toBeDefined());
    it("window.localStorage should be defined", () => expect(window.localStorage).toBeDefined());
    it("window.localStorage should be instance of InMemoryStorage", () => expect(window.localStorage).toBeInstanceOf(
        InMemoryLocalStorage));
    it("window.localStorage.getItem should be a function", () => expect(window.localStorage.getItem).toBeDefined());
    it("window.localStorage.setItem should be a function", () => expect(window.localStorage.setItem).toBeDefined());
    it("window.localStorage.removeItem should be a function", () => expect(window.localStorage.removeItem).toBeDefined());
    it("window.localStorage.setItem and getItem works", () => expect(item).toBe(23));
    it("window.localStorage.setItem, removeItem and getItem works", () => expect(removedItem).toBeUndefined());
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

    it("window should not throw an error", () => expect(() => {window.isNodeJS}).not.toThrowError());
    it("window should be defined", () => expect(window).toBeDefined());
    it("window.isNodeJS is true", () => expect(window.isNodeJS).toBe(true));
    it("window.WebSocket should be undefined", () => expect(window.WebSocket).not.toBeDefined());
});
