import * as _debug from "debug";
import { sleep } from "30-seconds-of-code";
import nodeWindowPolyfill from ".";


const debug = _debug("nodeWindowPolyfill-test");

describe("default polyfill Test", () => {

    beforeAll(async () => {
        nodeWindowPolyfill.register();
        debug(`after polyfill is called`);
    });

    afterAll(async () => {
        global.window = undefined;
    });

    it("window should not throw an error", () => expect(window).not.toThrowError());
    it("window should be instance of an object", () => expect(window).toBeInstanceOf({}));
    it("window.ws should be instance of an object", () => expect(window.ws).toBeInstanceOf({}));
});

describe("non 'ws' polyfill Test", () => {

    beforeAll(async () => {
        nodeWindowPolyfill.register(false);
        debug(`after polyfill is called`);
    });

    afterAll(async () => {
        global.window = undefined;
    });

    it("window should not throw an error", () => expect(window).not.toThrowError());
    it("window should be instance of an object", () => expect(window).toBeInstanceOf({}));
    it("window.ws should be undefined", () => expect(window.ws).toBeUndefined());
});
