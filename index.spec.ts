import * as _debug from "debug";
import { sleep } from "30-seconds-of-code";
import nodeWindowPolyfill from ".";


const debug = _debug("nodeWindowPolyfill-test");

describe("default polyfill Test", () => {

    beforeAll(async () => {
        debug(`after polyfill is called`);
    });

    afterAll(async () => {
    });

    it("window should not throw an error", () => expect(window).not.toThrowError());
    it("window should be instance of an object", () => expect(window).toBeInstanceOf({}));
});
