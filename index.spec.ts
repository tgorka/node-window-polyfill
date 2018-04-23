import * as _debug from "debug";
import { sleep } from "30-seconds-of-code";
import nodeWindowPolyfill from ".";


const debug = _debug("nodeWindowPolyfill-test");

describe("default polyfill Test", () => {

    beforeAll(async () => {
        (<any>global).window = undefined; // make sure it's not defined
        (<any>global).WebSocket = undefined;
        nodeWindowPolyfill.register();
        debug(`after default polyfill is called. ${typeof window}`);
    });

    afterAll(async () => {
        (<any>global).window = undefined;
    });

    it("window should not throw an error", () => expect(() => {window.isNodeJS}).not.toThrowError());
    it("window should be defined", () => expect(window).toBeDefined());
    it("window.isNodeJS is true", () => expect(window.isNodeJS).toBe(true));
    it("window.WebSocket should be instance of an object", () => expect(window.WebSocket).toBeDefined());
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
